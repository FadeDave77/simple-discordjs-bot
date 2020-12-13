const { MessageEmbed } = require("discord.js");
const vars = require('../../variables.js');

module.exports = {
    id: 'join', 
    aliases: ['joinvc'], 
    channels: 'guild',
    exec: async (call) => {
        if (call.message.member.voice.channel) {
            const connection = await call.message.member.voice.channel.join();
            call.message.reply(`joined '${call.message.member.voice.channel}'`);
        } else {
            call.message.reply('join a voice channel first!');
        };
    }
};
