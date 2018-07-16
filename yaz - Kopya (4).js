const Discord = require('discord.js');

exports.run = (client, message, args) => {
if (!message.guild) {
    return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Sunucu adı değiştir;').setDescription(message.author.tag + ', bu komutu direkt mesajda kullanamazsın.').setFooter('TheRenk', client.user.avatarURL).setTimestamp()); }
    const sayMessage = args.join(' ');
    if (sayMessage.length < 1) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Sunucu adı değiştir;').setDescription(message.author.tag + ', kullanım: t!sunucu-adı-değiştir <mesaj>.').setFooter('Turbo', client.user.avatarURL).setTimestamp());
    message.guild.setName(sayMessage);
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Sunucu adı değiştir;')
    .setDescription(message.author.tag + ', sunucu adı başarıyla değiştirildi.')
    .setFooter('TheRenk', client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'sunucu-ad-değiş',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};