const { MessageEmbed } = require("discord.js");
const vars = require('../../variables.js');
const ytdl = require('ytdl-core');
const { PassThrough } = require('stream');
const { fileURLToPath } = require('url');
const Discord = require('discord.js');

module.exports = {
    id: 'play', 
    aliases: [''], 
    channels: 'guild',
    exec: async (call) => {
        const args = call.message.content.split(' ').slice(1);
        const link = String(args.slice(0, 1));
        let volpercent = args.slice(1).join(' ');
        let vol = volpercent/100;
        const randomColor = "0x" + Math.random().toString(16).slice(2, 8);
        if (!vol) vol = 1;
        if (vol > 2) vol = 2;
        if (!link, link.length == 0) return call.message.reply('no');
        if (call.message.member.voice.channel) {
            const connection = await call.message.member.voice.channel.join();
            if (!ytdl.validateURL(link)) return call.message.reply('invalid string')
            const dispatcher = await connection.play(ytdl(`${link}`, {filter: 'audioonly'}), {volume: vol}); //|| connection.play(`${link}`, {volume: vol});
            let embed = new MessageEmbed()
                .setTitle('Music player :musical_note:')
                .setColor(randomColor)
                .setDescription(`Now playing ${link}, with \`${vol*100}%\` volume, requested by \`${call.message.author.tag}\`.`);
            call.message.reply(embed);
        } 
        else {
            call.message.reply('join a voice channel first!');
        };
    }
};
