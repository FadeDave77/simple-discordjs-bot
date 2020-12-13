const { MessageEmbed } = require("discord.js");
const vars = require('../../variables.js');

module.exports = {
    id: 'volume', 
    aliases: ['vol'], 
    channels: 'guild',
    exec: (call) => {
        //const connection = require('./head.js');
        //const dispatcher = require('./head.js');
        const args = call.message.content.split(' ').slice(1);
        let volpercent = args.slice(0).join(' ');
        let vol = volpercent/100;
        if (!vol) vol = 1;
        if (vol > 2) vol = 2;
        //dispatcher.setVolume(vol);
        call.message.reply(`set volume to ${volpercent}`);
    }
};
