const { MessageEmbed } = require("discord.js");
const vars = require('../../variables.js');

module.exports = {
    id: 'kick', 
    aliases: [''], 
    channels: 'guild',
    exec: (call) => {
        const args = call.message.content.split(' ').slice(1);
        let kickReason = args.slice(1).join(' ');
        if (call.message.member.hasPermission('KICK_MEMBERS')) {
            let User = call.message.guild.member(call.message.mentions.members.first()) || call.message.guild.members.cache.get(args[0]);
            if (!User) return call.message.reply('no tag / id bro');
            if (User.hasPermission('KICK_MEMBERS') && call.message.author.id != OwnerId) return call.message.reply('cant kick user, they have kick perms too');
            if (!kickReason) {
                kickReason = 'None';
            };
            User.kick(kickReason);
            call.message.channel.send(`User "${User}" has been kicked, with reason "${kickReason}".`);
        }
        else {
            call.message.reply('no perms bro');
        };
    }
};
