const Discord = require("discord.js");
const {config, prefix, devs} = require("../config.json")

exports.run = async (bot, message, args) => {
    message.channel.send(`
**__מפתחים:__**
`+"MajinBluee - מתכנת"+`
`)
}

module.exports.help = {
    name: "developers"
  }
