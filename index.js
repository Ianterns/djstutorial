const {Collection, Client, Discord} = require('discord.js')
const { MessageEmbed } = require('discord.js')
const ms = require('ms')
const fs = require('fs')
const client = new Client()

const config = require('./config.json')
const prefix = config.prefix
const token = config.token

client.config = config;
client.commands = new Collection(); 
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
client.on('ready', () => {
   client.user.setActivity(`${prefix}help | www.wintr.me`)
   console.log(`${client.user.tag} logged in!`)
})

client.on('message', async message => {

     const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
     if (message.content.match(prefixMention)) {
     return message.channel.send(`www.wintr.me`);
  }
     if(message.author.bot || message.channel.type === "dm") return;
     if (!message.content.startsWith(prefix)) return;
     if (!message.guild) return;
     if (!message.member) message.member = await message.guild.fetchMember(message);
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
     const cmd = args.shift().toLowerCase();
     if (cmd.length == 0) return;
     let command = client.commands.get(cmd)
     if (!command) command = client.commands.get(client.aliases.get(cmd));
     if (command) command.run(client, message, args)
   })

client.login(token)