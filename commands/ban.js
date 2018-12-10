const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('.אין לך הרשאות להוציא אנשים מהשרת');
  let member = message.mentions.members.first();
  if (!member) return message.channel.send('.נא ציין מישהו להוציא מהשרת');
  if (!member.bannable) return message.channel.send('.אתה לא יכול להוציא מישהו מהשרת עם רול גבוהה או שווה לשלך');  
  let reason = args.slice(1).join(' ');
  await member.ban(reason)
  .catch(e => console.log(e));
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.tag, message.author.displayAvatarURL)
  .setTitle('Banned')
  .setDescription(`${member.user.tag} הוצא מהשרת!\nסיבה: ${reason}`)
  message.channel.send(embed);
};

module.exports.help = {
  name:"ban"
}
