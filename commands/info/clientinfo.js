const { MessageEmbed } = require("discord.js");
const vars = require('../../variables.js');

module.exports = {
    id: 'clientinfo', 
    aliases: [''], 
    channels: 'any',
    exec: (call) => {
        const randomColor = "0x" + Math.random().toString(16).slice(2, 8);
        const embed = new MessageEmbed()
            .setTitle(`ClientInfo for ${call.client.user.tag}`)
            .setColor(randomColor)
            .setDescription(`Uptime: ${call.client.uptime/1000 + 's'}`)
            .setImage(call.client.user.avatarURL());
        call.message.channel.send(embed);
    }
};
