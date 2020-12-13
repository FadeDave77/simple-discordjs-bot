const { MessageEmbed } = require("discord.js");
const vars = require('../../variables.js');

module.exports = {
    id: 'delete', 
    aliases: ['rm', 'purge', 'clear'], 
    channels: 'guild',
    exec: async (call) => {
        const args = call.message.content.split(' ').slice(1);
        let torm = args.slice(0).join(' ');
        if (!call.message.member.hasPermission('MANAGE_MESSAGES')) return call.message.reply('no perms bro');
        if (!torm, 1>torm, isNaN(torm), torm === '') torm = 1;
        torm = Number(torm)
        let originaltorm = torm;
        torm += 1;
        if (1000<torm) torm = Number(1000);
        while (torm>0) {
        if (torm <= 100) {await call.message.channel.messages.fetch({limit: torm}).then(async messages => {
            await call.message.channel.bulkDelete(messages);
            if (torm <= 2) await call.message.channel.send(`Removed one message.`);
            if (torm > 2) await call.message.channel.send(`Removed ${originaltorm} messages.`);
            let toDelete = await call.message.channel.lastMessageID;
            setTimeout(() => {call.message.channel.messages.fetch(toDelete).then(message => message.delete()).catch(console.error)}, 5000)});
            torm -= torm
            continue;}
        else {await call.message.channel.messages.fetch({limit: 100}).then(async messages => {
            await call.message.channel.bulkDelete(messages)});
            torm -= 100
            continue;}
        };
    }
};
