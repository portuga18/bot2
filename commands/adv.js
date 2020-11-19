const Discord = require('discord.js')
const Database = require("../Data/database.js")

exports.run = async (client, message, args) => {

    message.delete()
    if (!(message.member.hasPermission("MANAGE_MESSAGES"))) {
        return await message.channel.send('<:errado:739528758456877146> Comando restrito para os **Administradores**').then(msg => msg.delete({ timeout: 5000, reason: 'It had to be done.' }));
      };


      let motivo = args.slice(1).join(" ")

        if(!motivo){
            message.channel.send("<:errado:739528758456877146> Erro no comando!\n"+ message.author +", Mencione quem deve ser advertido e o motivo!\n Use `!adv @usuario motivo`").then(msg => msg.delete({ timeout: 5000, reason: 'It had to be done.' }));
            return
        }

        Database.BemVindo.findOne({guilda: message.guild.id}, function(erro, dados) { 
            if(dados){

    
                if (!dados.advs) return message.channels.send("<:errado:739528758456877146> Erro no comando!\n"+ message.author+", Nenhum canal foi setado para armazenar as Advertencias!\n Fale com um Admin usar o comando `!setarcanaladvertencias #canal`").then(msg => msg.delete({ timeout: 5000, reason: 'It had to be done.' })); 
                if (!dados.adv1) return message.channel.send("<:errado:739528758456877146> Erro no comando!\n"+ message.author+", Nenhum grupo foi setado para setar as Advertencias!\n Fale com um Admin usar o comando `!setargrupoadv1 @grupo`").then(msg => msg.delete({ timeout: 5000, reason: 'It had to be done.' }));
                if (!dados.adv2) return message.channel.send("<:errado:739528758456877146> Erro no comando!\n"+ message.author+", Nenhum grupo foi setado para setar as Advertencias!\n Fale com um Admin usar o comando `!setargrupoadv2 @grupo`").then(msg => msg.delete({ timeout: 5000, reason: 'It had to be done.' }));
                if (!dados.adv3) return message.channel.send("<:errado:739528758456877146> Erro no comando!\n"+ message.author+", Nenhum grupo foi setado para setar as Advertencias!\n Fale com um Admin usar o comando `!setargrupoadv3 @grupo`").then(msg => msg.delete({ timeout: 5000, reason: 'It had to be done.' }));

    let vitima = message.mentions.members.first() || message.guild.members.get(args[0]);    

    if(vitima.roles.cache.has(dados.adv1)) {

        var mensagem2 = new Discord.MessageEmbed()
        .setTitle("Advertencia")
        .addField(`**Advertido:** `, `${vitima}`,true)
        .addField("**Advertido por:** ", `${message.author}`,true)
        .addField("**Motivo:** ", `${motivo}`,true)
        .addField("Advertencia: ", "**2**/3")

        
        vitima.roles.remove(dados.adv1)
        try{
        vitima.roles.add(dados.adv2)
        return client.channels.cache.get(dados.advs).send(mensagem2);
    } catch (err) {
        console.log("Erro no adv 2")
    }
        
    }else if(vitima.roles.cache.has(dados.adv2)) {

        var mensagem3 = new Discord.MessageEmbed()
        .setTitle("Advertencia")
        .addField(`**Advertido:** `, `${vitima}`,true)
        .addField("**Advertido por:** ", `${message.author}`,true)
        .addField("**Motivo:** ", `${motivo}`,true)
        .addField("Advertencia: ", "**3**/3")
        
        
        vitima.roles.remove(dados.adv2)
        
        vitima.roles.add(dados.adv3)
        try{
        vitima.members.ban(`3 advertências.`)
        return client.channels.cache.get(dados.advs).send(mensagem3);
    } catch (err) {
        console.log("Erro no adv 3")
    }
    }else if(vitima.roles.cache.has(dados.adv3)) {
        vitima.members.ban(`3 advertências.`)
        return;
    }else {

        var mensagem1 = new Discord.MessageEmbed()
    .setTitle("Advertencia")
    .addField(`**Advertido:** `, `${vitima}`,true)
    .addField("**Advertido por:** ", `${message.author}`,true)
    .addField("**Motivo:** ", `${motivo}`,true)
    .addField("Advertencia: ", "**1**/3")
try{
        vitima.roles.add(dados.adv1)
        return client.channels.cache.get(dados.advs).send(mensagem1)
} catch (err) {
    console.log("Erro no adv 1")
}

            }
}

        })
    }
    

