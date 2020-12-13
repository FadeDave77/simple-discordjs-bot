const { MessageEmbed } = require("discord.js");
const vars = require('../../variables.js');

module.exports = {
    id: 'userinfo', 
    aliases: ['uinfo' , 'user'], 
    channels: 'guild',
    exec: (call) => {
        const randomColor = "0x" + Math.random().toString(16).slice(2, 8);
        const args = call.message.content.split(' ').slice(1).join(' ');
        let User;
        if (!args, args.length === 0) User = call.message.author;
        else if (call.message.mentions.members.first()) User = call.message.guild.member(call.message.mentions.members.first()).user;
        else if (!call.message.mentions.members.first() && args.length != 0 && args && call.message.guild.members.cache.get(args.slice(0))) User = call.message.guild.members.cache.get(args.slice(0)).user;
        else return call.message.reply('invalid user arguments!');
        const embed = new MessageEmbed()
            .setTitle(`Userinfo for \`${User.tag}\``)
            .setColor(randomColor)
            .setDescription(`
            **Created at:** ${User.createdAt}
            **UserID:** ${User.id}
            **IsBot:** ${User.bot}
            **Status:** ${User.presence.status}
            
            **Avatar:**
            `)
            .setImage(User.avatarURL());
        call.message.channel.send(embed);
    }
};