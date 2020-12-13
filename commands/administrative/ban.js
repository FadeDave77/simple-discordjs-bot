const { MessageEmbed } = require("discord.js");
const vars = require('../../variables.js');

module.exports = {
    id: 'ban', 
    aliases: ['yeet'], 
    channels: 'guild',
    exec: (call) => {
        const args = call.message.content.split(' ').slice(1);
        let banReason = args.slice(1).join(' ');
        if (call.message.member.hasPermission('BAN_MEMBERS')) {
            let User = call.message.guild.member(call.message.mentions.members.first()) || call.message.guild.members.cache.get(args[0]);
            if (!User) return call.message.reply('no tag / id bro');
            if (User.hasPermission('BAN_MEMBERS') && call.message.author.id != OwnerId) return call.message.reply('cant ban user, they have ban perms too');
            if (!banReason) {
                banReason = 'None';
            };
            User.ban({reason: banReason});
            call.message.channel.send(`User "${User}" has been banned, with reason "${banReason}", forever`);
        }
        else {
            call.message.reply('no perms bro');
        };
    }
};
