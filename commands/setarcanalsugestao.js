const Discord = require('discord.js');
const Database = require("../Data/database.js");

exports.run = async (client, message, args) => {

    let canal = message.mentions.channels.first();
    if(!canal) return message.reply("O Canal nao existe");
    let channel = message.mentions.channels.first();

    if (!(message.member.hasPermission('ADMINISTRATOR'))) {
      return await message.channel.send('<:errado:739528758456877146> Comando restrito para os **Administradores**').then(msg => msg.delete({ timeout: 5000, reason: 'It had to be done.' }));;
    };

      message.delete();
      
      Database.BemVindo.findOne({guilda: message.guild.id}, function(erro, dados) {
        if(!dados){
            
            let embed = new Discord.MessageEmbed()
            
            .setTitle("Sistema de Sugestoes")
            .setDescription("\n > Para sugerir novas coisas, basta digitar o seguinte comando nesse canal: \n ```.sugestao``` \n e responda as perguntas que o bot ira lhe fazer na primeira sala do discord ") 
            .setColor("RANDOM")
            .setThumbnail(client.user.avatarURL)
            .setFooter(message.guild.name + " :copyright: 2020")              
            .setTimestamp();
            new Database.BemVindo({
                sugestao: canal.id,
                guilda: message.guild.id
              }).save()
              message.guild.channels.cache.get(channel.id).send(embed)

            }else {
              let embed = new Discord.MessageEmbed()
  
              .setTitle("Sistema de Sugestoes")
              .setDescription("\n > Para sugerir novas coisas, basta digitar o seguinte comando nesse canal: \n ```.sugestao``` \n e responda as perguntas que o bot ira lhe fazer na primeira sala do discord ") 
              .setColor("RANDOM")
              .setThumbnail(client.user.avatarURL)
              .setFooter(message.guild.name + " :copyright: 2020")              
              .setTimestamp();
              message.guild.channels.cache.get(channel.id).send(embed)
                  dados.sugestao = canal.id
                  dados.save();
          }
        })

}