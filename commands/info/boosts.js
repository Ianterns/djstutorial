const Discord = require("discord.js");
 
module.exports = {
    name: "boosts",
    aliases: ["boost", "bssts"],
    description: "bots latency",
    run: async(client, message) => {
   const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField("Boosts", message.guild.premiumSubscriptionCount, false)
   .addField("Tier", message.guild.premiumTier  , false)
   message.channel.send(embed);
  }
 }
