const { MessageEmbed } = require("discord.js");
const vars = require('../../variables.js');

module.exports = {
    id: 'servers', 
    aliases: ['serv'], 
    channels: 'dm',
    exec: (call) => {
        if (call.message.author.id !== OwnerId) return call.message.channel.send('no u');
        call.client.guilds.cache.forEach(guild => {
            call.message.channel.send(`${guild.name} | ${guild.id}`);
        });
    }
};
