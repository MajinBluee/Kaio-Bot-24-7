const Discord = require("discord.js")
const bot = new Discord.Client()
const {prefix, config} = require("./config.json")
const fs = require("fs");
const music = require("./music")
bot.commands = new Discord.Collection();

bot.on("ready", async () => {
console.log(`${bot.user.tag} is now online`)
})

fs.readdir("./commands/", (err, files) => {
    //console.log(`Loading a total of ${files.length} commands.`);

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("message", (message) => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return 

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(!message.content.startsWith(prefix)) return;

let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
})

bot.login(process.env.TOKEN)

//===================================================================================

bot.on("ready", async () => {
bot.user.setActivity(`${bot.guilds.size} servers | ${prefix}help`, {type: "PLAYING"});
});

bot.on("guildCreate", guild => {
bot.user.setActivity(`${bot.guilds.size} servers | ${prefix}help`, {type: "PLAYING"});
});

bot.on("guildDelete", guild => {
bot.user.setActivity(`${bot.guilds.size} servers | ${prefix}help`, {type: "PLAYING"});
});

//===================================================================================

  bot.on('guildMemberAdd', member => {
    const channel = 
member.guild.channels.find('name', 'welcome') || 
member.guild.channels.find('name', 'ברוך-הבא') || 
member.guild.channels.get('479994469966413845') || 
member.guild.channels.get('493858311058227220')
    if (!channel) return;

      let joinEmbed = new Discord.RichEmbed()
      .setTitle("**User Joined**")
      .setColor(`light_green`)
      .setThumbnail("https://i.imgur.com/qB8puaF.png")
      .setDescription(`
${member} joined to the server **${member.guild.name}**
we are now **${member.guild.memberCount} members**`)
      channel.send(joinEmbed);

    //var role = member.guild.roles.find('name', 'Member');
    //member.addRole(role)
  });
  
  bot.on('guildMemberRemove', member => {
        const channel = 
member.guild.channels.find('name', 'welcome') || 
member.guild.channels.find('name', 'ברוך-הבא') || 
member.guild.channels.get('479994469966413845') || 
member.guild.channels.get('493858311058227220')
    if (!channel) return;
      let leaveEmbed = new Discord.RichEmbed()
      .setTitle("**User Left**")
      .setColor(`red`)
      .setThumbnail(member.user.avatarURL)
      .setDescription(`
${member} left from the server **${member.guild.name}**
we are now **${member.guild.memberCount} members**`)

      channel.send(leaveEmbed);
  });
