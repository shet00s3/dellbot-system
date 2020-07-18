
exports.run = (client, config, chalk) => {
	if(client.user.id == config.bot.botid) { 
		client.user.setPresence({ game: { name: config.bot.gamestatus.replace('[servercount]', client.guilds.size).replace('[membercount]', client.users.size) } })
		console.log(chalk.green(` 
		 We are ready now! 
		 Your bot name : ${client.user.username}
		 Your bot id : ${client.user.id}
		 Guilds : ${client.guilds.size} !
		 Users : ${client.users.size}
		 Bot developed by @Faisal.#7738`))

	}
         client.guilds.forEach( ( guild ) => {
				if( guild.me.hasPermission( 'MANAGE_GUILD' ) ) {
					guild.fetchInvites().then((data) => {
						data.forEach((Invite, key, map) => {
							var Inv = Invite.code;
							lastinvites[Inv] = Invite.uses;
						})
					})
				}
		});
};
      