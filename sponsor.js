const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
	message.channel.send({embed: {
    color: 0xD97634,
    title: ":tada:  Partner = ||TS7||ReTwEr =>> Rondom Keys",
    url: "https://discord.gg/NgKBJzT",
    description: "DLC KEY VERIYOLAR STEAM KOSS",
            }});
	
	message.channel.send({embed: {
    color: 0xD97634,
    title: ":tada:  Partner = Recep :heart:  Cansu =>> Sonsuz Yapım",
    url: "https://discord.gg/HCHgUB8",
    description: "•+200 kişiye yakın bir sunucu\n•Birlikte Oyunlar Oynadığımız\n•Partner ve Alımın Açık Olduğu Bir Sunucu\n:ok_hand:  Senide Bekleriz :ok_hand:\n <@431150610851823617> Ve <@427884522068246539>",
            }});
	message.channel.send({embed: {
    color: 0xD97634,
    title: ":tada:  Partner = Warior =>> HYPE CAMUNITY SBD YAPIM",
    url: "https://discord.gg/WhGcj4",
    description: "•Burasi Bir Bot Dc si \n •Bir Gurup Toplamayuı Dusunuyuz \n •Bu konuda bilgin varsa gel :wink: \n <@327520524152602624> Ve <@325260517256069121>",
	
            }});
			message.channel.send({embed: {
    color: 0xD97634,
    title: ":tada:  Partner = sahibi =>> sunucu adi",
    url: "",
    description: "•partner olmak için **l!partnerbb** :ok_hand:",
            }});
	
	
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'sponsor',
  description: 'sponsorları gösterir.',
  usage: 'sponsor'
};
