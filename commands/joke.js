const request = require('superagent');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
 const { body } = await request
        .get(`http://jokes.yo-yoo.co.il/?cat=%F7%F8%F9`)
        //.set('Accept', 'application/json');
        let jEmbed = new Discord.RichEmbed()
        .setTitle("Joke")
        .setDescription(body.joke)
        .setColor("RANDOM")
        message.channel.send(jEmbed);
}

module.exports.help = {
  name: "joke"
}

//import aiohttp
//from lxml import html
//from random import randint
//async def fetch(url):
//        async with aiohttp.ClientSession() as session:
//            async with session.get(url) as resp:
//                return await resp.text()
//
//return ' '.join(html.fromstring(await fetch(f'http://jokes.yo-yoo.co.il/joke.php?id={randint(1, 1707)}')).xpath('/html/body/center[2]/div/div[2]/text()')).replace('&nbsp', '')
