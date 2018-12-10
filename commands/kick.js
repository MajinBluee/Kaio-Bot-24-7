const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("אין לך הרשאה להוציא אנשים");
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("נא לציין מישהו")
    if(kUser.id === bot.user.id) return message.channel.send("אתה לא יכול להוציא בוטים"); 
    let kReason = args.join(" ").slice(22);
    if(!kReason) return message.channel.send("אתה צריך סיבה ספציפית");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("אתה לא יכול להוציא את האיש הזה")

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kicked")
    .setColor("#bc0000")
    .addField("מי שיצא", kUser)
    .addField("מי שהוציא", message.author)
    .addField("סיבה", kReason);

    let logchannel = message.guild.channels.find(`name`, "log");
    if(!logchannel) return message.channel.send("`log` אני לא יכול למצוא ערוץ בשם");

    message.guild.member(kUser).kick(kReason);
    logchannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
