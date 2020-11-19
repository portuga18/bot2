const Discord = require('discord.js');
const Database = require("../Data/database.js");

exports.run = async (client, message, args) => {

  let grupo= message.mentions.roles.first()
  if(!grupo) return message.reply("Marque apenas 1 cargo para armazenar o grupo de advertencia.\n Use o comando: ```!setargrupoadv3 @grupo```");


  if (!(message.member.hasPermission('ADMINISTRATOR'))) {
        return await message.channel.send('<:errado:739528758456877146> Comando restrito para os **Administradores**').then(msg => msg.delete({ timeout: 5000, reason: 'It had to be done.' }));;
      };

      message.delete();
      
    Database.BemVindo .findOne({guilda: message.guild.id}, function(erro, dados) {
        if(!dados){
            let embed = new Discord.RichEmbed()

                .setColor("RANDOM") 
                .setTitle(`${message.author.usertag}`)
                .setDescription(`**Grupo de Advertencia setado com sucesso! O Grupo de 3º Advertencia setada como: **\n${grupo} \n \n Sete o 3º grupo de advertencia use:\n .setarcargoadv3 @grupo`)
                .setFooter( "Server_Do_Cliente © 2020", client.user.avatarURL)
                .setTimestamp();
                new Database.BemVindo({
                    adv3: grupo.id,
                    guilda: message.guild.id
                  }).save()
                message.channel.send(embed)
        }else {
            let embed = new Discord.RichEmbed()

                .setColor("RANDOM") 
                .setTitle(`${message.author.username}`)
                .setDescription(`**Grupo de Advertencia setado com sucesso! <a:verify:687759351330766901> \n \n O Grupo de 3º Advertencia setada como: **\n> ${grupo} \n \n` + "\n ```OBS: Quando o membro levar a 3 Advertencia \nserá banido automaticamente!```")
                .setFooter(message.guild.name + " © 2020", client.user.avatarURL)
                .setTimestamp();
                message.channel.send(embed).then(msg => msg.delete({ timeout: 5000, reason: 'It had to be done.' }));
                dados.adv3 = grupo.id
                dados.save();
        }
        })

    

}