const readline = require('readline');
const { exec } = require('child_process');
var chalk;


function colorWord( words , color) {
    if(color == 1) {
        return `\u001B[32m${words}\u001B[39m\u001B[31m`
    } else {
        return `\u001B[31m${words}\u001B[39m`

    }
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var i = 0;
var package = ['discord.js', 'mysql', 'sync-mysql','moment', 'countdown', 'fs']



function start_setup ( ) { 
console.log(chalk.green('Trying to install modules.'))

package.forEach(module => { 
     //  console.log(`${module}: ${package[module]}`);
     exec(`npm ls ${module}`, (err, stdout, sterr) => {
        if (err) {
            exec(`npm install ${module}`, (err, stdout, stderr) => {
                if (err) {
                    console.log(chalk.red(`[ ❎ ] - The module [ ${module} ]  installed failed.`))
                    return;
                }
                i++;
                console.log(chalk.green(`[ ✅ ] - The module [ ${module} ] completed installed.`))
            
            
            });
           return;
        }
        i++;

        console.log(chalk.green(`[ ✅ ] - The module [ ${module} ] downloaded before!.`))

    })

})
}



var step2 = setInterval( function ( ) { 
if(package.length == i ) {
    console.log('...')
console.log(chalk.blue('- Starting on step 2 ( Edit config ) '))

var fs = require('fs');

var simple_config = { 
    "bot": {
    "token_bot": "TOKEN BOT",
    "owners": [  ],
    "botid": "BOT ID",
    "supporter":  [ ],
    "prefix": "#",
    "premiumlobbyserverid": "",
    "gamestatus": "[membercount] User Online!" 
}
}


var c = JSON.parse(fs.readFileSync('./config/main.json','utf8'));
rl.question(chalk.green('Please enter the bot token : \n'), (answer) => {
    simple_config.bot.token_bot = answer;
    console.log(chalk.green(`Susscus added the token : ${answer}`));
    // Owner id 
    rl.question(chalk.green('Please enter the owner bot id : \n'), (answer2) => {
        simple_config.bot.owners.push(parseInt(answer2));
        console.log(chalk.green(`Susscus added the owner : ${answer2}`));
        // bot id
        rl.question(chalk.green('Please enter the bot id : \n'), (answer3) => {
            simple_config.bot.botid = parseInt(answer3);
            console.log(chalk.green(`Susscus added the id : ${answer3}`));

            // prefix
            rl.question(chalk.green('Please enter the bot prefix : \n'), (answer4) => {
                simple_config.bot.prefix = answer4;
                console.log(chalk.green(`Susscus added the prefix : ${answer4}`));
                // Premium lobby
                rl.question(chalk.green('Please enter the premium lobby you can add all premium bots in this guild : \n'), (answer5) => {
                    simple_config.bot.premiumlobbyserverid = parseInt(answer5);
                    console.log(chalk.green(`Susscus added the premium lobby : ${answer5}`));
                    fs.writeFileSync('./config/main.json',simple_config);
                })
            })
        })
    })
  });

clearInterval(step2)
}
}, 10000)







setTimeout( function ( ) {
    exec(`npm install chalk`, (err, stdout, stderr) => {
        if (err) {
            console.log(colorWord(`[ ❎ ] - The module [ chalk ]  installed failed.`))
            return;
        }
  chalk = require('chalk')   
console.log(' ')
console.log(chalk.green('Welcome to PlaneBot - setup lounge.'))
start_setup();
});

}, 5000)