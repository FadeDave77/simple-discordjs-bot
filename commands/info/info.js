const { MessageEmbed } = require("discord.js");
const vars = require('../../variables.js');

module.exports = {
    id: 'info', 
    aliases: [''], 
    channels: 'any',
    exec: (call) => {
        const randomColor = "0x" + Math.random().toString(16).slice(2, 8);
        const embed = new MessageEmbed()
            .setTitle(`Info for /dev/null`)
            .setDescription(`Designed by **FadeDave#7005** in California, made in China.
            More info on here coming soon.
            To get help use ${vars.Prefix}help`)
            .setColor(randomColor);
        call.message.channel.send(embed);
    }
};
