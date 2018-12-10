const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

const info = [
  "גוהאן הוא הבן של גוקו ושל צ'יצ'י, נחשב כחצי סאייני וחצי בן אדם.",
  "בנוסף אצל גוהאן מוסתרים כוחות חבויים שמתעוררים כשהוא מתעצבן.",
  "כשהכוחות החבויים של גוהאן מתפרצים הם חזקים מדי והוא לא מצליח לשלוט בהם.",
  "למרות כוחותיו החזקים במיוחד, גוהאן לא אוהב להילחם אלא דווקא אוהב ללמוד, כשגדל (בדרגון בול סופר ",
  "ודרגון בול GT) הפך למלומד ועובד באוניברסיטה.",
  "גילה את מצב הסופר סאייה 2 ראשון בסדרה כשניצח את סל.",
  "מאוחר יותר בסדרה, לגוהאן נולד אח – גוטן, התחתן עם וידל ואבא של פאן.",
  "גוהאן ביישן, צנוע וחכם מאוד."
]

const embed = new Discord.RichEmbed()
.setTitle('__**הסבר על גוהאן**__')
.setColor("RANDOM")
.setDescription(info)
.setImage("https://dragonballz.co.il/wp-content/uploads/2015/01/teen_gohan_render_by_luishatakeuchiha-d5yzsg6-878x1024.png")

message.channel.send(embed)
  
}

module.exports.help = {
  name: "gohan"
}
