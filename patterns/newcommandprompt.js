const { MessageEmbed } = require("discord.js");
const vars = require('../variables.js');

module.exports = {
    id: '', 
    aliases: [''], 
    channels: 'any',
    exec: (call) => {
        call.prompt('',{ time: 60000 }).then((message) => {

            }).catch((exc) => {
                call.message.channel.send('Cancelled prompt.');
            });
    }
};
