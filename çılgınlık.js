const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setAuthor(`${message.author.username}, Adlı kişi ${kullanıcı.user.username}, Adlı kişiye sarıldı! Aga b.`)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0xff2f2f)
  .setImage("https://thumbs.gfycat.com/AnguishedAncientBengaltiger-size_restricted.gif")
  .setFooter("©️ 2018 | İBD BOT", "https://i.hizliresim.com/5DNb6d.jpg")
  /*
   * Takes a Date object, defaults to current date.
   */

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cılgın,sea,ase,nbr'],
  permLevel: 0
};

exports.help = {
  name: 'çılgınlık',
  description: 'Botun pingini gösterir.',
  usage: 'cılgın'
};