const Discord = require("discord.js");
const Database = require("../Data/database.js");


exports.run = async(client, message) => {

    message.delete()

if(!message.member.hasPermission("SEND_MESSAGES")) return message.reply("você não tem a permissão ``SEND_MESSAGES``!");
message.guild.channels.create(`denuncia ${message.author.username}`, {type: 'text'}).then(canal => {
  
  canal.createOverwrite(message.author, {
	VIEW_CHANNEL: true,
});
  canal.createOverwrite(message.guild.id, {
	VIEW_CHANNEL: false,
});
  
  
let dc = 'https://discord.gg/5QGKNdR'
canal.setParent('685608289366442042');
const filter = a => a.author.id === message.author.id;
canal.send("Qual seu ID?").then(msg => {
    const coletor = new Discord.MessageCollector(msg.channel, filter, {maxMatches: 1});
    coletor.on('collect', m => {
        const mensagem1 = m.content;
        coletor.stop();
canal.send(" Qual o ID/Nome do acusado?")
    const coletor2 = new Discord.MessageCollector(msg.channel, filter, {maxMatches: 1});
    coletor2.on('collect', m2 => {
        const mensagem2 = m2.content;
        coletor2.stop();
canal.send("O que aconteceu?")
    const coletor3 = new Discord.MessageCollector(msg.channel, filter, {maxMatches: 1});
    coletor3.on('collect', m3 => {
        const mensagem3 = m3.content;
        coletor3.stop();
canal.send("Qual as provas? (Envie tudo em uma mensagem)")
        const coletor4 = new Discord.MessageCollector(msg.channel, filter, {maxMatches: 1});
        coletor4.on('collect', m4 => {
            const mensagem4 = m4.content;
            coletor4.stop();
canal.send("Você deseja enviar esta Report? Se sim digite ``enviar`` Caso contrário, digite ``cancelar``!")
    const coletor5 = new Discord.MessageCollector(msg.channel, filter, {maxMatches: 10});
    coletor5.on('collect', m5 => {
        const mensagem5 = m5.content;
        if(mensagem5.toLowerCase() === "cancelar") {
            canal.send("Esta ação foi cancelada! <a:loading3:685180135246397452> ")
            canal.send("Este canal será excluído em 5 segundos! <a:loading4:687759349355118838>")
            setTimeout(() => {
                canal.delete();
                }, 5000)
        }else if(mensagem5.toLowerCase() === "enviar") {
            canal.send("Report enviada com sucesso! <a:verify:687759351330766901>\n\nEste canal será excluído em 5 segundos! <a:atencao:687759344095461482>")
            setTimeout(() => {
                canal.delete();
                }, 5000)

            Database.BemVindo.findOne({guilda: message.guild.id}, function(erro, dados) { 
                if(dados){

                  //if (!dados.dr) return canal.channels.send("<:errado:739528758456877146> Erro no comando!\n"+ message.author+", Nenhum canal foi setado para armazenar as denuncias!\n Fale com um Admin usar o comando `!setarcanaldenunciasrecebidas #canal`").then(msg => msg.delete({ timeout: 5000, reason: 'It had to be done.' })); 

                    const embed = new Discord.MessageEmbed()
                    .setTitle(`<a:verify:687759351330766901> Reporte recebido`)
                    .setDescription(`\n\n<:discord:687759347165692029> Membro: ${message.author.tag}\n\n<:membros:687759347954090109> ID da vitima: ${mensagem1}\n\n<:id:687759347312230439> ID/Nome do acusado: ${mensagem2}\n\n<a:atencao:687759344095461482> Ocorrido: ${mensagem3}\n\n<a:seta:687759348125925392> Provas: ${mensagem4}`)
                    .setFooter(message.guild.name + " © 2020", client.user.avatarURL)
                    try{
                    client.channels.cache.get(dados.dr).send(embed)
                } catch (err) {
    console.log("Erro ao enviar denuncia")
                }
                
          }
          });
        
        }
    })  
    });
    });
});
});
});
});
}