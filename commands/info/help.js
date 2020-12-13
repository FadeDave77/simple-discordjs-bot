const { MessageEmbed } = require("discord.js");
const vars = require('../../variables.js');

module.exports = {
    id: 'help', 
    aliases: ['halp'], 
    channels: 'any',
    exec: (call) => {
        const randomColor = "0x" + Math.random().toString(16).slice(2, 8);
        const embed = new MessageEmbed()
            .setTitle('Help')
            .setColor(randomColor)
            .setDescription(`
            FadeBot1
            ^^^ = Bot Owner Only
            ^^ = Server Admins Only

            ^^^ ${vars.Prefix}Prefix (newPrefix)
            ${vars.Prefix}help = get this embed
            ${vars.Prefix}coq = determines your ** c o q ** size
            ${vars.Prefix}join = join your voice channel
            ${vars.Prefix}play (yt url) <volume in %>
            flush = post the flush emoji creation
            ${vars.Prefix}ping = get the bots ping
            ${vars.Prefix}userinfo = get info about your user
            ^^ ${vars.Prefix}ban (mention/id) <reason> 
            ^^ ${vars.Prefix}kick (mention/id) <reason> 
            ^^ ${vars.Prefix}unban (id)
            ${vars.Prefix}info = general info about the bot
            ${vars.Prefix}clientinfo = info about the bots client
            ^^^ ${vars.Prefix}serv = list joined servers 
            ^^ ${vars.Prefix}rm <count> remove x messages (up to 100)
            ${vars.Prefix}invite = get bot invite link
            ${vars.Prefix}embed post an embed, use without args to get help on the syntax
            ${vars.Prefix}yeet = ban (but not actually) but very funny
            `)
            .setFooter(`Requested by ${call.message.author.tag}`)
        call.message.channel.send(embed);
    }
};
