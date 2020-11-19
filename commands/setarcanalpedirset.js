const Discord = require('discord.js');
const Database = require("../Data/database.js");

exports.run = async (client, message, args) => {

    let canal = message.mentions.channels.first();
    if(!canal) return message.reply("O Canal nao existe");
    let channel = message.mentions.channels.first();

    if (!(message.member.hasPermission('ADMINISTRATOR'))) {
        return await message.reply(':x: Você não tem permissão para isso!');
      };

      message.delete();
      
      Database.BemVindo.findOne({guilda: message.guild.id}, function(erro, dados) {
        if(!dados){
            
            let embed = new Discord.RichEmbed()
            
            .setTitle("Sistema de Reportar")
            .setDescription("\n > Para pedir set a um jogador basta digitar o seguinte comando nesse canal: \n ```.pedirset``` \n e responda as perguntas que o bot ira lhe fazer na primeira sala do discord ") 
            .setColor("RANDOM")
            .setThumbnail(client.user.avatarURL)
            .setFooter(message.guild.name + " :copyright: 2020")              
            .setTimestamp();
            new Database.BemVindo({
                pedirset: canal.id,
                guilda: message.guild.id
              }).save()
              message.guild.channels.get(channel.id).send(embed)

            }else {
              let embed = new Discord.RichEmbed()
  
              .setTitle("Sistema de Sugestoes")
              .setDescription("\n > Para pedir set a um jogador basta digitar o seguinte comando nesse canal: \n ```.pedirset``` \n e responda as perguntas que o bot ira lhe fazer na primeira sala do discord ") 
              .setColor("RANDOM")
              .setThumbnail(client.user.avatarURL)
              .setFooter(message.guild.name + " :copyright: 2020")              
              .setTimestamp();
              message.guild.channels.get(channel.id).send(embed)
                  dados.pedirset = canal.id
                  dados.save();
          }
        })

}