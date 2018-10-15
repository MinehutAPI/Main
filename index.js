// Main Constants

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

// Main Events

client.on('error', console.error);

process.on('unhandledRejection', console.error);

client.on('ready', () => {
	client.user.setActivity(`Minehut | mh!help`, { type: 'watching' });
	console.log([
		'',
		`MinehutAPI | ${client.users.size} users are using the bot on ${client.guilds.size} guilds.`,
		'',
	].join('\n'));
});

// Message

client.on('message', message => {
	if (message.author.bot) return
	if(!message.guild === null);
		let member = message.member;
		let guild = message.guild;
		let args = message.content.split(' ');
		let command = args.shift();
	switch(command) {
		case 'mh!' + 'help':
			message.channel.send('Future Commands:\n`mh!help`: basic MinehutAPI help\n`mh!top:` view the current top servers\n`mh!server`: get info on a specific server\n`mh!ping`: view the MinehutAPI ping')
			.then(msg => {
				if (message.guild.me.hasPermission('MANAGE_MESSAGES')) message.delete(16000);
				msg.delete(16000)
			})
			break;
	}
});

// EVAL

function clean(text) {
	if (typeof(text) === "string")
		return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
	else
		return text;
}

client.on('message', async message => {
	if (message.author.bot) return
	let args = message.content.split(" ").slice(1);
	if (message.content.startsWith('eval')) {
		if(message.author.id !== '221659063312842752') message.channel.send(`Unfortunately, only MrScopes can use eval. This is for security reasons :ok_hand:`);
		//
		let msg = message;
		let guild = message.guild;
		let guilds = client.guilds.map(guild => guild.name + ", " + guild.id).join("\n");
		let member = message.member;
		let user = message.member.user;
		let channel = message.channel;
		let roles = message.guild.roles.map(r => r.name).join("\n");
		//
			try {
				let code = args.join(" ");
				if (code);
				let evaled = await eval(code);
				if (typeof evaled !== "string")
					evaled = require("util").inspect(evaled);
				message.channel.send(clean(evaled), {code:"xl"});
			} catch (err) {
				message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
			}
		}
});

// Login

client.login(config.token);
