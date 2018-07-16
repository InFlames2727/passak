const Discord = require('discord.js');
const client = new Discord.Client();
const sql = require("sqlite");
sql.open("./altin.sqlite");


exports.run = (client, message, args) => {

  sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.reply("Hiç bir Tolar yok kazanılması çok zordur.");
	  const embed = new Discord.RichEmbed()
  .setTitle("Benim Tolarlarım")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xD97634)
  .setDescription(`:ok_hand: Zolaratiniz : **${row.level} Zolar*`)
  .setThumbnail("https://cdn.discordapp.com/attachments/357222791545618443/395275027525664768/Coin-ZEC-Vanilla-512.png");
		message.channel.send({embed});
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['zentormoney','ZentorPuanlarım','zentorpuanlarım','zentorpara','zp','zentorparası','zentorparasi','param'],
  permLevel: 0
};

exports.help = {
  name: 'madenlerim',
  description: 'Altınları gösterir.',
  usage: 'zolarım'
};
