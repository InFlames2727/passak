const Discord = require('discord.js');
const client = new Discord.Client();
const sql = require("sqlite");
sql.open("./altin.sqlite");


exports.run = (client, message, args) => {
  if (message.author.bot) return;
  if (message.channel.type !== "text") return;

  sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    } else {
      let curLevel = Math.floor(0.7 * Math.sqrt(row.points + 1));
      if (curLevel > row.level) {
        row.level = curLevel;
        sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
      }
      sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    });
  });

  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "Zolarp")) {
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.reply("Hiç bir ZentorPuanı yok kazanılması çok zordur.");
      message.channel.send({embed: {
        author: {
          name: (message.author.username),
          icon_url: message.author.avatarURL
        },
        color: 0xD97634,
        title: "Benim Seviyem",
        description: `:ok_hand: Zolar Puanlarınız : **${row.level}**`
      }});
    });
  } else

  if (message.content.startsWith(prefix + "zolarpp")) {
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.reply(":expressionless: Hiç puanın yok !");
      message.channel.send({embed: {
        author: {
          name: (message.author.username),
          icon_url: message.author.avatarURL
        },
        color: 0xD97634,
        title: "Puanlarım",
        description: `:yum: Şuan **${row.points}** puanın var`
      }});
    });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['zentorpuani'],
  permLevel: 0
};

exports.help = {
  name: 'zentor',
  description: 'Altınları gösterir.',
  usage: 'altın'
};
