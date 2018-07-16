const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("RANDOM")
  .addField('Aleyküm Selam Hoşgeldin!')
  .setTimestamp()
  message.channel.send({embed});
  message.react('🇦')
  message.react('🇸')
 };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sa',
  description: 'Botun pingini gösterir.',
  usage: 'sa'
};