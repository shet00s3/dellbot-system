
    

exports.run = async (client, message) => {



    var c = { 
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': [],
        '6': [],

    
    }
    Object.keys(help).forEach(key => {
    if(help[key].group == 1) {
        c['1'].push(key);
    }
    if(help[key].group == 2) {
        c['2'].push(key);
    }
    if(help[key].group == 3) {
        c['3'].push(key);
    }
    if(help[key].group == 4) {
        c['4'].push(key);
    }
    if(help[key].group == 5) {
        c['5'].push(key);
    }
    if(help[key].group == 6) {
        c['6'].push(key);
    }
    })
    var prefix1 = main_config.bot.prefix;
    var msg2 = "**"
    var msg3 = "**"

    var msg = "**"
    msg += "بأمكانك دعوة البوت والتحكم باعداداته عن طريق موقعنا : \n"
    msg += "قريبا/ \n"
    msg += " - الاداره السيرفرات \n"
    msg += "  \n"
    c['1'].forEach(key => { 
    if(help[key].settings.owneronly) { 
        if(main_config.bot.owners.includes(message.author.id)) { 
            msg += `    [  :white_small_square: ] ${main_prefix1}${key} |  ${help[key].des} \n`
        }
    } else {
        if(help[key].settings.premium) { 
            if(client.user.id !== main_config.bot.botid) { 
                msg += `    [  :white_small_square: ] ${prefix1}${key} |  ${help[key].des} \n`
            }
        } else {
            msg += `    [  :white_small_square: ] ${prefix1}${key} |  ${help[key].des} \n`
        }
    }
    })
    msg2 += "  \n"
    msg2 += "- الاوامر العامة \n"
    c['2'].forEach(key => { 
        if(help[key].settings.owneronly) { 
            if(main_config.bot.owners.includes(message.author.id)) { 
                msg2 += `    [  :small_blue_diamond: ] ${prefix1}${key} |  ${help[key].des} \n`
            }
        } else {
            if(help[key].settings.premium) { 
                if(client.user.id !== main_config.bot.botid) { 
                    msg2 += `    [  :small_blue_diamond: ] ${prefix1}${key} |  ${help[key].des} \n`
                }
            } else {
                msg2 += `    [  :small_blue_diamond: ] ${prefix1}${key} |  ${help[key].des} \n`
            }
        }
        })
        msg2 += " \n"
    if(c['3'].length) { 
        msg2 += "- اوامر خاصة \n"
    c['3'].forEach(key => { 
        if(help[key].settings.owneronly) { 
            if(main_config.bot.owners.includes(message.author.id)) { 
                msg2 += `    [  :small_orange_diamond: ] ${prefix1}${key} |  ${help[key].des} \n`
            }
        } else {
            if(help[key].settings.premium) { 
                if(client.user.id !== main_config.bot.botid) { 
                    msg2 += `    [  :small_orange_diamond: ] ${prefix1}${key} |  ${help[key].des} \n`
                }
            } else {
                msg2 += `    [  :small_orange_diamond: ] ${prefix1}${key} |  ${help[key].des} \n`
            }
        }
        })
        msg2 += "**"
    msg3 += "  \n"
    msg3 += "- اوامر الدعم \n"
    c['4'].forEach(key => { 
        msg3 += `    [  :black_small_square:  ] ${prefix1}${key} |  ${help[key].des} \n`
     
        })
        msg3 += "  \n"
        msg3 += "- اوامر البروفايل \n"
    c['5'].forEach(key => { 
        msg3 += `    [ :white_medium_small_square:   ] ${prefix1}${key} |  ${help[key].des} \n`
     
        })
    
        msg3 += "**"
    }
    message.author.send(msg)
    .then( m => {
    message.author.send(msg2).then(m2 => {
        message.author.send(msg3)
    })

    })
    .catch(err =>  message.react('❌'))
    }
              
              
exports.settings = {
     "name": "help",
     "sub-names": [],
     "server": false,
     "owneronly": false,
     "premium": false,
     "permissions": [  ],
     "perMsg": "",
     "description": "لـ ارسال اوامر البوت",
     "group": 4
}  