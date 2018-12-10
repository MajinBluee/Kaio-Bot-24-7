const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

const info = [
  "קרירין הוא בן אדם רגיל שבצעירותו התאמן עם גוקו אצל מאסטר רושי, והתחרה יחד עם גוקו בטנקאיצ'י בודוקאי ה21.",
  "בזמן אימוניו אצל מאסטר רושי, קרירין וגוקו נהפכו לחברים טובים מאוד, ועד היום הם החברים הכי טובים!",
  "קרירין נחשב מאוד חזק לשאר בני האדם ואף לבן האדם החזק ביותר לאחר טנשינהאן.",
  "בנוסף לזה שהוא אמיץ ונאמן הוא גם חברותי ומצחיק.",
  "קרירין נשוי לאנדרואיד 18 והוא אבא של מארון (הבת שלהם)."
]

const embed = new Discord.RichEmbed()
.setTitle('__**הסבר על קרירין**__')
.setColor("RANDOM")
.setDescription(info)
.setImage("https://dragonballz.co.il/wp-content/uploads/2015/01/render_dragon_ball_krillin-232x300.png")

message.channel.send(embed)
  
}

module.exports.help = {
  name: "krillin"
}
