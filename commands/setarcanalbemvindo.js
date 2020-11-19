const Discord = require("discord.js");
const Database = require("../Data/database.js");

exports.run = async (client, message, args) => {
  let canal = message.mentions.channels.first();
  if (!canal) return message.reply("O Canal nao existe");

  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return await message.channel
      .send(
        "<:errado:739528758456877146> Comando restrito para os **Administradores**"
      )
      .then(msg => msg.delete({ timeout: 5000, reason: "It had to be done." }));
  }

  message.delete();

  Database.BemVindo.findOne({ guilda: message.guild.id }, function(
    erro,
    dados
  ) {
    if (!dados) {
      let embed = new Discord.MessageEmbed()

        .setColor("RANDOM")
        .setDescription(`Canal de Bem vindo atualizado para ${canal}`)
        .setFooter(message.guild.name + " © 2020", client.user.avatarURL)
        .setTimestamp();
      new Database.BemVindo({
        idcanal: canal.id,
        guilda: message.guild.id
      }).save();
      message.channel.send(embed);
    } else {
      let embed = new Discord.MessageEmbed()

        .setColor("RANDOM")
        .setTitle(`${message.author.username}`)
        .setDescription(
          `**Canal de bem-vindo setado com sucesso! <a:verify:687759351330766901> \n \n  O canal setada como: **\n${canal}`
        )
        .setFooter(message.guild.name + " © 2020", client.user.avatarURL)
        .setTimestamp();
      message.channel.cache.send(embed).then(msg =>
          msg.delete({ timeout: 5000, reason: "It had to be done." })
        );
      dados.idcanal = canal.id;
      dados.save();
    }
  });
};
