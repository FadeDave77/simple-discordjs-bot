const { MessageEmbed } = require("discord.js");
const vars = require('../../variables.js');

module.exports = {
    id: 'ping', 
    aliases: ['pong', 'bonk'], 
    channels: 'any',
    exec: (call) => {
        let ping = Date.now() - call.message.createdTimestamp + 'ms';
        const randomColor = "0x" + Math.random().toString(16).slice(2, 8);
        const embed = new MessageEmbed()
            .setTitle('Bonk!')
            .setColor(randomColor)
            .setDescription(`DiscordAPI latency: \n **${ping}**`)
            .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/53/flushed-face_1f633.png');
        call.message.channel.send(embed);
    }
};