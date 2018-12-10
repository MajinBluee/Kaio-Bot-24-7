const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

const info = [
  "פיקולו הוא נאמקי שבא מהביצה שירק פיקולו דאימאו.",
  "פיקולו נולד לאחר תבוסתו של אביו פיקולו דאימאו ובהתחלה היה רשע שמטרתו הייתה להרוג את גוקו.",
  "עם הזמן פיקולו עבר לצד הטוב, לצד של גוקו יחד עם כל לוחמי הזי.",
  "פיקולו אומנם נראה אכזרי, אך מבפנים יש לו לב טוב. יש לו אף קשר מיוחד עם גוהאן, בנו של גוקו.",
  "הוא מרבה להתבודד ויש לו סגנון לחימה ייחודי משלו ומתקפות שיצר בעצמו."
]

const embed = new Discord.RichEmbed()
.setTitle('__**הסבר על פיקולו**__')
.setColor("RANDOM")
.setDescription(info)
.setImage("https://dragonballz.co.il/wp-content/uploads/2015/01/Piccolo_Trans.png")

message.channel.send(embed)
  
}

module.exports.help = {
  name: "piccolo"
}
