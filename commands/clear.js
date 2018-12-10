const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
if(!message.member.hasPermission(8))
if(!message.member.hasPermission(["MANAGE_MESSAGES"]))
if(!message.member.roles.find("name", "mods"))
if(!message.member.roles.find("name", "admins"))
if(!args[0]) return message.channel.send("אתה צריך לרשום כמה הודעות אתה רוצה שאני אמחק")
if(args[0] > 100) return message.channel.send("אני יכול למחוק רק 100 הודעות כל פעם")
message.channel.bulkDelete(args[0])
message.channel.send(`Messages deleted: ${args[0]}`).then(msg => {
setTimeout(function() {
msg.delete()
}, 15000)
})
}

module.exports.help = {
    name: "clear"
}
