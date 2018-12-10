const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

const info = [
  "גוקו או בשמו הסאייני – קאקרוטו, הוא סאייני שהגיע כתינוק לכדור הארץ כדי להשמידו.",
  "גוקו הדמות הראשית בסדרה, חזק, בעל לב טוב ומרחם גם על אויביו.",
  "כשהיה תינוק גדל עם סבו החורג, עד שסבו מת. הסדרה דרגון בול התחילה כשפגש את בולמה לראשונה.",
  "גוקו נשוי לצ'יצ'י, אביהם של גוהאן וגוטן, הנכד המאומץ של סבא גוהאן, וסבא לנכדה פאן.",
  "בין המתקפות שלו ניתן למצוא את הקמאהמאה (שלמד ממאסטר רושי), הגנקי דמה והקאיוקן (שלמד מהמלך קאיו).",
]

const embed = new Discord.RichEmbed()
.setTitle('__**הסבר על גוקו**__')
.setColor("RANDOM")
.setDescription(info)
.setImage("https://dragonballz.co.il/wp-content/uploads/2015/01/Adulto-768x1024.png")

message.channel.send(embed)
  
}

module.exports.help = {
  name: "goku"
}
