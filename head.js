#!/usr/bin/nodemon

//init
console.log(`---------------------------------------- Initializing head.js ---------------------------------------`);
const handler = require('d.js-command-handler');
const { exec, execFile } = require('child_process');
const { timeStamp, time, timeLog } = require('console');
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const { randomInt } = require('crypto');
const Discord = require('discord.js');
const { Client, MessageEmbed, Attachment } = require('discord.js');
const { setServers } = require('dns');
const { create } = require('domain');
const { EventEmitter } = require('events');
const fs = require('fs');
const { basename } = require('path');
const { send, uptime } = require('process');
const { createInterface } = require('readline');
const { PassThrough } = require('stream');
const { fileURLToPath } = require('url');
const ytdl = require('ytdl-core');
const vars = require('./variables.js');
let client = new Client({ disableEveryone: true });

//onReady
client.on('ready', () => {
    console.log(`======================================== Up @${client.user.tag}! ========================================`);
    client.setMaxListeners(30)
    setTimeout(() => {client.user.setStatus('dnd')}, 2000);
    setTimeout(() => {client.user.setActivity(`out for ${vars.Prefix}info`, { type: 'WATCHING' })}, 2000);
});

//logon
handler(__dirname + '/commands', client, { customPrefix:vars.Prefix});
client.login(vars.TokenNull);

// leftover commands
client.on('message', message => {
    if (message.content.includes('flush')) {
	if (message.content.includes('<@' && '>')) return;
        const embed = new MessageEmbed()
        .setTitle(':flushed: FLUSH')
        .setColor(0xff7000)
        .setDescription(`
        ⚫⚫⚫⚫⚫😳😳😳😳⚫⚫⚫⚫⚫
        ⚫⚫⚫😳😳⚫⚫⚫⚫😳😳⚫⚫⚫
        ⚫⚫😳🟤🟤🟤⚫⚫🟤🟤🟤😳⚫⚫
        ⚫😳⚫⚫⚪⚪⚫⚫⚪⚪⚫⚫😳⚫
        ⚫😳⚫⚪🟢🟢⚪⚪🟢🟢⚪⚫😳⚫
        😳⚫⚫⚪🟢🟢⚪⚪🟢🟢⚪⚫⚫😳
        😳⚫⚫🔴⚪⚪⚫⚫⚪⚪🔴⚫⚫😳
        😳⚫🔴🔴🔴🔴⚫⚫🔴🔴🔴🔴⚫😳
        😳⚫🔴🔴🔴⚫⚫⚫⚫🔴🔴🔴⚫😳
        ⚫😳⚫🔴⚫⚫⚫⚫⚫⚫🔴⚫😳⚫
        ⚫😳⚫⚫⚫🟤🟤🟤🟤⚫⚫⚫😳⚫
        ⚫⚫😳⚫⚫⚫⚫⚫⚫⚫⚫😳⚫⚫
        ⚫⚫⚫😳😳⚫⚫⚫⚫😳😳⚫⚫⚫
        ⚫⚫⚫⚫⚫😳😳😳😳⚫⚫⚫⚫⚫
        `);
        message.channel.send(embed);
    };
});

//guild member changes
client.on('guildMemberAdd', member => {
const channel = member.guild.channels.cache.find(ch => ch.name === 'dev-null');
if (!channel) return;
const embed = new MessageEmbed()
    .setTitle('*Welcome*')
    .setColor(0x0000ff)
    .setDescription(`
    ${member} 
    ${member.user.tag}
    ${member.guild.memberCount} total members
    Welcome to the server!
    `);
channel.send(embed);
});

client.on('guildMemberRemove', member => {
const channel = member.guild.channels.cache.find(ch => ch.name === 'dev-null');
if (!channel) return;
const embed = new MessageEmbed()
    .setTitle('*Goodbye*')
    .setColor(0xff0000)
    .setDescription(`
    ${member} 
    ${member.user.tag}
    ${member.guild.memberCount} total members
    Goodbye.. i guess.
    `);
channel.send(embed);
});
