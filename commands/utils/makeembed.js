const { MessageEmbed } = require("discord.js");
const vars = require('../../variables.js');

module.exports = {
    id: 'embed', 
    aliases: ['makeembed', 'mkembed'], 
    channels: 'any',
    exec: (call) => {
        const args = call.message.content.split(';').slice(2);
        if (!call.message.content.endsWith(';')) return call.message.reply(`Malformed expression! Syntax: ${vars.Prefix}embed ; $Title ; $ColorHex ; $Description ; $ImageUrl ; $ThumbnailUrl ; (Every semicolon is required!)`);
        let title = args.slice(0, 1);
        let color = args.slice(1, 2);
        let description = args.slice(2, 3);
        let image = args.slice(3, 4);
        let thumbnail = args.slice(4, 5);
        try { const embed = new MessageEmbed()
            .setTitle(`${title}`)
            .setDescription(`${description}`)
            .setImage(`${image}`)
            .setColor(`${color}`)
            .setThumbnail(`${thumbnail}`);
        call.message.channel.send(embed); }
        catch { console.error(), call.message.reply('invalid field(s)') };
    }
};
