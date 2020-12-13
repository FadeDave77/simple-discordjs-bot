const { MessageEmbed } = require("discord.js");
const vars = require('../../variables.js');

module.exports = {
    id: 'prefix', 
    aliases: [''], 
    channels: 'guild',
    exec: (call) => {
        const args = call.message.content.split(' ').slice(1);
        let newPrefix = args.slice(0).join(' ');
        console.log(newPrefix);
        if (call.message.author.id !== OwnerId) return call.message.channel.send('not bot owner, exiting');
        if (!call.message.guild) return call.message.channel.send('not in a guild');
        if (newPrefix) {
            Prefix = newPrefix;
            call.message.reply(`prefix changed to '${newPrefix}' succesfully.`);
        }
        else {
            call.message.reply('no prefix specified');
        };
    }
};
