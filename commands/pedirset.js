const Discord = require("discord.js");
const Database = require("../Data/database.js");


exports.run = async(client, message, args) => {

    message.delete()

if(!message.member.hasPermission("SEND_MESSAGES")) return message.reply("você não tem a permissão ``SEND_MESSAGES``!");
if(message.channel.type === "dm") return;
message.guild.createChannel(`Pedir set ${message.author.username}` , {type: 'text'}).then(canal => {
    canal.overwritePermissions(message.guild.defaultRole, {
        VIEW_CHANNEL: false
    })
    canal.overwritePermissions(message.member, {
        VIEW_CHANNEL: true
    })


    let dc = 'https://discord.gg/5QGKNdR'

    canal.setParent('706298735902064651');
    
const filter = a => a.author.id === message.author.id;
canal.send(`${message.author}, ID de quem precisa de setagem?`).then(msg => {
    const coletor = new Discord.MessageCollector(msg.channel, filter, {maxMatches: 1});
    coletor.on('collect', m => {
        const mensagem1 = m.content;
        coletor.stop();
canal.send("Qual organização?")
    const coletor2 = new Discord.MessageCollector(msg.channel, filter, {maxMatches: 1});
    coletor2.on('collect', m2 => {
        const mensagem2 = m2.content;
        coletor2.stop();
canal.send("Tipo de Setagem? Discord ou Jogo")
    const coletor3 = new Discord.MessageCollector(msg.channel, filter, {maxMatches: 1});
    coletor3.on('collect', m3 => {
        const mensagem3 = m3.content;
        coletor3.stop();
canal.send("Você deseja enviar este pedir set? Se sim digite ``enviar`` Caso contrário, digite ``cancelar``!")
    const coletor5 = new Discord.MessageCollector(msg.channel, filter, {maxMatches: 10});
    coletor5.on('collect', m5 => {
        const mensagem5 = m5.content;
        if(mensagem5.toLowerCase() === "cancelar") {
            canal.send("Esta ação foi cancelada! <:cancelado:687759344330473473> ")
            canal.send("Este canal será excluído em 5 segundos! <a:loading4:687759349355118838>")
            setTimeout(() => {
                canal.delete();
                }, 5000)
        }else if(mensagem5.toLowerCase() === "enviar") {
            canal.send("Pedir set enviada com sucesso! <a:verify:687759351330766901>\n\nEste canal será excluído em 5 segundos! <a:verify:687759351330766901>")
            setTimeout(() => {
                canal.delete();
                }, 5000)


            Database.BemVindo.findOne({guilda: message.guild.id}, function(erro, dados) { 
                if(dados){


                    const embed = new Discord.RichEmbed()
                    .setTitle(`<a:verify:687759351330766901> Pedir Set recebido`)
                    .setDescription(`\n\n<:membros:687759347954090109> Membro: ${message.author.tag}\n\n <:id:687759347312230439> ID no Jogo: ${mensagem1}\n\n <:id:687759347312230439> Organização: ${mensagem2}\n\n <a:verify:687759351330766901> Tipo de Setagem: ${mensagem3}`)
                    .setFooter(message.guild.name + " © 2020", client.user.avatarURL)
                    try{
                    client.channels.get(dados.pedirset).send(embed)
                } catch (err) {
                    const erro = new Discord.RichEmbed()
                    .setTitle(`Aconteceu um erro!`)
                    .setDescription(`Não foi possivel achar o canal para enviar a mensagem do sistema de **Pedir set**. Peça a um administrador para usar .setarcanalpedirset #canal. \n Caso continue com o erro, entre em contato com o desenvolvidor <@392125887975522304>`)
                    .setFooter(`Atensiosamente FiveBot `, client.user.avatarURL)
                    message.reply(erro).then(msg => msg.delete(10000)); 
                  }
          }
        })
            
        }
    })  
    });
    });
});
});
});
}