const Discord = require('discord.js');
const Database = require("../Data/database.js");

exports.run = async (client, message, args) => {

  let grupo= message.mentions.roles.first()
  if(!grupo) return message.reply("O grupo nao existe");


  if (!(message.member.hasPermission('ADMINISTRATOR'))) {
        return await message.channel.send('<:errado:739528758456877146> Comando restrito para os **Administradores**').then(msg => msg.delete({ timeout: 5000, reason: 'It had to be done.' }));;
      };

      message.delete();
      
    Database.BemVindo .findOne({guilda: message.guild.id}, function(erro, dados) {
        if(!dados){
            let embed = new Discord.RichEmbed()

                .setColor("RANDOM") 
                .setDescription(`Grupo de aprovados de whitelist setado com sucesso para ${grupo}`)
                .setFooter( "Emocionados Roleplay © 2020", client.user.avatarURL)
                .setTimestamp();
                new Database.BemVindo({
                    group: grupo.id,
                    guilda: message.guild.id
                  }).save()
                message.channel.send(embed)
        }else {
            let embed = new Discord.RichEmbed()

                .setColor("RANDOM") 
                .setDescription(`Grupo de aprovados de whitelist atualizado para ${grupo}`)
                .setFooter(message.guild.name + " © 2020", client.user.avatarURL)
                .setTimestamp();
                message.channel.send(embed).then(msg => msg.delete({ timeout: 5000, reason: 'It had to be done.' }));
                dados.group = grupo.id
                dados.save();
        }
        })

    

}