const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("RANDOM")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("נוצר ב", message.guild.createdAt)
    .addField("אתה נכנסת", message.member.joinedAt)
    .addField("סהכ האנשים", message.guild.memberCount);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}
