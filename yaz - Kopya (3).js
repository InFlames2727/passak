const Discord = require('discord.js');
const Jimp = require('jimp'); 

exports.run = (client, message, args) => {
    if (!message.guild) {
    return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Sunucu resmi;').setDescription(message.author.tag + ', bu komutu direkt mesajda kullanamazsın.').setFooter('TheRenk', client.user.avatarURL).setTimestamp()); }
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Sunucu resmi;')
    .setImage(message.guild.iconURL)
    .setFooter('TheRenk', client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embed);
        };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 0
};

exports.help = {
  name: 'sunucu-resim',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
