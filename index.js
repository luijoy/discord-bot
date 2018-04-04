const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    var msg = message.content.toLowerCase();
    if (msg.includes('wtb') || msg.includes('wts') || msg.includes('want to buy') || msg.includes('want to sell')) {
        // message.reply('pong');
        message.channel.sendMessage(`Neither the Core Team, nor the Decentral Team, will from now on do any Escrows / Middleman services. We continue to receive reports of people who got scammed, because they did not check our Hashtag Numbers. Because of that, there will be no escrow services from any team members.\n 
        :pray: - Please use exchanges.\n
        :mailbox_with_mail: - Additional exchanges are already contacted and will hopefully be added soon. \n
        :point_right: - Do not ask the Developers, the Core Team or Decentral Team to do any Escrows from now on. \n
        :no_entry_sign: - If you get contacted from any "official" who tells you that he will make the escrow, this will clearly be a scam attempt.`);
    }
});

bot.login('NDMxMDM1MjQ5NDg5NjA4NzA0.DaY4Yw.eRKxMdLF3xOKpw6RR4r53US5wwo');

// const commando = require('discord.js-commando');
// const bot = new commando.Client();

// bot.registry.registerGroup('random', 'Random');
// bot.registry.registerDefaults();
// bot.registry.registerCommandsIn(__dirname + "/commands");

