const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

const info = [
  "וג'יטה הוא נסיך שבט הסאייה, הבן של המלך וג'יטה, הוא גדל על כוכב וג'יטה ושירת אצל פריזה.",
  "וג'יטה הגיע לכדור הארץ בגלל המסר שנשלח אליו ואל נאפה מראדיץ.",
  "וג'יטה הוא אכזרי ורשע, אך עם הזמן הוא התרכך.",
  "הוא נלחם מתוך גאווה ואגו.",
  "הוא אבא של טראנקס וברה ובעלה של בולמה (בעברית בורמה)",
  "הוא לא מוכן שמישהו יעקוף אותו בעוצמתו, יש לו מטרה להיות יותר חזק מגוקו."
]

const embed = new Discord.RichEmbed()
.setTitle("__**הסבר על וג'יטה**__")
.setColor("RANDOM")
.setDescription(info)
.setImage("https://dragonballz.co.il/wp-content/uploads/2015/01/Vegeta_Render-404x1024.png")

message.channel.send(embed)
  
}

module.exports.help = {
  name: "vegeta"
}
