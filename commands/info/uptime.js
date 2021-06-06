const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "uptime",
    aliases: ["howlong", "upt"],
    description: "bots uptime",
    run: async(client, message) => { 
        try {
            let days = Math.floor(client.uptime / 86400000);
          let hours = Math.floor(client.uptime / 3600000) % 24;
          let minutes = Math.floor(client.uptime / 60000) % 60;
          let seconds = Math.floor(client.uptime / 1000) % 60;
  
          const embed = new MessageEmbed()
              .setColor("RANDOM")
              .setDescription(`**Djs Tutorials** Has been running for: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`)
          message.channel.send(embed);
      } catch (e) {
      return message.channel.send(`An error occured try again later or use @wintr support`);
    }
    
    }
}
