const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!member) return message.channel.send("Mention a user.");
    if(member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("אין לך הרשאה לדווח");
    let reason = message.content.split(' ').slice(2).join(' ')

    message.delete().catch(O_o=>{});

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("דיווחים")
    .setColor("RANDOM")
    .addField("האיש המדווח", `${member}`,true)
    .addField("המדווח", `${message.author}`,true)
    .addField("סיבה", reason,true)

    let reportschannel = message.guild.channels.find(`name`, "log")
    if(!reportschannel) return message.channel.send("`log` אני לא יכול למצוא ערוץ בשם");

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
    message.channel.send(`**${member.user.username}#${member.user.discriminator} דווח**`);

  }

module.exports.help = {
  name:"report"
}
