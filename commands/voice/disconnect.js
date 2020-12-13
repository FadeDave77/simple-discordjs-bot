const { MessageEmbed } = require("discord.js");
const vars = require('../../variables.js');

module.exports = {
    id: 'disconnect', 
    aliases: ['dc'], 
    channels: 'guild',
    exec: (call) => {
        if (call.message.content.startsWith(vars.Prefix+'dc')) {
            //const connection = require('./head.js');
            //const dispatcher = require('./head.js');
        };
    }
};
