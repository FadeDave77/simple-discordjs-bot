const { MessageEmbed } = require("discord.js");
const vars = require('../../variables.js');

module.exports = {
    id: 'invite', 
    aliases: ['inv'], 
    channels: 'any',
    exec: (call) => {
        const embed = new MessageEmbed()
            .setTitle('Bot Invite')
            .setDescription(`https://discord.com/oauth2/authorize?client_id=${call.client.user.id}&permissions=8&scope=bot`);
        call.message.reply(embed);
    }
};
