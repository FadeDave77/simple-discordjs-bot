const { MessageEmbed } = require("discord.js");
const vars = require('../../variables.js');

module.exports = {
    id: 'coq', 
    aliases: ['cock'], 
    channels: 'any',
    exec: (call) => {
        const args = call.message.content.split(' ').slice(1);
        let User = call.message.guild.member(call.message.mentions.members.first()) || call.message.guild.members.cache.get(args[0]);
        const embed = new MessageEmbed();
            if (User) embed.setTitle(`Oh, i see you got a cock there \`${User.user.username}\` :smirk: :eyes:`);
            else embed.setTitle(`Oh, i see you got a cock there \`${call.message.author.tag}\` :smirk: :eyes:`);
            embed.setColor(0xff9000)
            .setDescription(`
            May i know how long is it? :flushed: Pwease? Uwu? :flushed:
            I will assume that your cock is ${Math.floor((Math.random()*690))/10}cm long :smirk: :hot_face:
            `);
            
        call.message.channel.send(embed);
    }
};