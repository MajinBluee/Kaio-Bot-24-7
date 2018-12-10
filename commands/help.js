const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

const commands = [
  '**הנהלה**',
  '`$ban` - מעיף אנשים לתמיד מהשרת (;ban {@Member} {Reason})',
  '`$kick` - מעיף אנשים מהשרת {@Member} {Reason})',
  '`$mute` - משתיק אנשים {@Member} {Reason})',
  '`$report` - מדווח על אנשים למנהלי השרת {@Member} {Reason}',
  '**כיף**',
  '`$joke` - אומר לך בדיחה',
  '`$gif` - Gif שולח לך תמונת',
  '`$cat` - שולח תמונה רנדומלית של חתול',
  '`$dog` - שולח תמונה רמדומלית של כלב',
  '`$rip` - הורג את מי שאתה רוצה {@Member}',
  '**מוזיקה**',
  '`$playsong` - מנגן שיר {Song Name} {Song Url}',
  '`$stop` - מפסיק את השיר',
  '`$pause` - עושה פאוז לשיר',
  '`$resume` - ממשיך את השיר',
  '`$queue` - מציג את התור של רשימת השירים',
  '`$nowplaying` - אומר לך מה מתנגן עכשיו',
  '**אחר**',
  '`$say` - אומר את מה שאתה אומר לו לאמר {Message}',
  '`$number` - אומר לך  מספר בין 1 ל- 100',
  '`$clear` - מנקה את הצאט {Number 1 - 100}',
  '`$avatar` - שולח את התמונהSends the avatar of a person {@Member}',
  '`$poll` - מתחיל הצבעה {Question}',
  '`$dmserver` - שולח הודעה לכל השרת {Message}',
  '**מידע**',
  '`$serverinfo` - אומר לך מידע על השרת',
  '`$roleinfo` - אומר לך מידע על רול {@Role Name}',
  '`$members` - אומר לך מידע על האנשים בשרת',
  '`$developers` - אומר לך מי המפתחים של הבוט',
  '`$goku` - אומר לך מידע על גוקו מדרגון בול',
  '`$piccolo` - אומר לך מידע על פיקולו מדרגון בול',
  '`$krillin` - אומר לך מידע על קרירין מדרגון בול',
  '`$gohan` - אומר לך מידע על גוהאן מדרגון בול',
  "`$vegeta` - אומר לך מידע על וג'יטה מדרגון בול",
];

const embed = new Discord.RichEmbed()
.setTitle('פקודות')
.setColor("RANDOM")
.setDescription(commands)

message.channel.send(embed)

  }

module.exports.help = {
  name:"help"
}
