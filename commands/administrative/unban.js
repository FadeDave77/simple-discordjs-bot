const { MessageEmbed } = require("discord.js");
const vars = require('../../variables.js');

module.exports = {
    id: 'unban', 
    aliases: ['unyeet'], 
    channels: 'guild',
    exec: (call) => {
        const args = call.message.content.split(' ').slice(1);
        if (call.message.member.hasPermission('BAN_MEMBERS')) {
            let userID = args[0];
            call.message.guild.fetchBans().then(bans=> {
            if(bans.size == 0) return;
            let User = bans.find(b => b.user.id == userID);
            if(!User) return call.message.reply('no id bro');
            call.message.guild.members.unban(User.user);
            return call.message.channel.send(`${User.user.tag} (${User.user.id}) unbanned succesfully`);
            });
        }
        else {
            call.message.reply('no perms bro');
        };
    }
};
