const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('NDMxMDM1MjQ5NDg5NjA4NzA0.DaY4Yw.eRKxMdLF3xOKpw6RR4r53US5wwo');

// const Discord = require('discord.js');
// const bot = new Discord.Client();

/* bot.on('message', (message) => {
    if (message.content == 'ping') {
        // message.reply('pong');
        message.channel.sendMessage('pong');
    }
}); */


