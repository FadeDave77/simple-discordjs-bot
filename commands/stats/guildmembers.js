const { MessageEmbed } = require("discord.js");
const vars = require('../../variables.js');

module.exports = {
    id: 'guildmembers', 
    aliases: ['members'], 
    channels: 'guild',
    exec: (call) => {
        if (call.message.author.id !== OwnerId) return call.message.channel.send('no u');
        call.message.guild.members.cache.forEach(member => {
        call.message.channel.send(`${member.user.tag} | ${member.id}`)
        });
    }
};
