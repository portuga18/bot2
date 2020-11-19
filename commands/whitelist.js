const Discord =require('discord.js')
const mysql = require('mysql');
const Database = require("../Data/database.js");
const config = require('../config.js');



exports.run = async(client, message, args) => {



message.delete()
if (ip[message.guild.id].guild && users[message.guild.id].guild && senha[message.guild.id].guild && db[message.guild.id].guild === message.guild.id ) {
    try {
const connection = mysql.createConnection({ //Info da database, para conectar
            host: `${ip[message.guild.id].ips}`,
            user: `${users[message.guild.id].user}`,
            password: `${senha[message.guild.id].senhas}`,
            database:  `${db[message.guild.id].dbs}`
        });
  connection.connect((err) => {
      console.log(err)
    });

      setInterval(function () {
        connection.query('SELECT 1');
      }, 5000);  

    var acertou = 0;
    var errou = 0;

    if(!message.member.hasPermission("SEND_MESSAGES")) return await message.channel.cache.send('<:errado:739528758456877146> Comando restrito para os **Administradores**').then(msg => msg.delete({ timeout: 5000, reason: 'It had to be done.' }));;
    if(message.channel.type === "dm") return;
    message.guild.createChannel(`whitelist ${message.author.username}` , {type: 'text'}).then(canal => {
        canal.overwritePermissions(message.guild.defaultRole, {
            VIEW_CHANNEL: false
        })
        canal.overwritePermissions(message.member, {
            VIEW_CHANNEL: true
        })

        canal.setParent('751835598335246435');

    let dc = 'https://discord.gg/54fhpcU'
    const filter = a => a.author.id === message.author.id;
    canal.send("Qual seu ID?").then(msg => {
        const coletor0 = new Discord.MessageCollector(msg.channel, filter, {maxMatches: 1});
        coletor0.on('collect', m0 => {
            const mensagem0 = m0.content;
            coletor0.stop();
    canal.send("Qual Seu Nome na Cidade?").then(msg => {
                const coletor1 = new Discord.MessageCollector(msg.channel, filter, {maxMatches: 1});
                coletor1.on('collect', m1 => {
                    const mensagem1 = m1.content;
                    coletor1.stop();

    canal.send("Responda somente os numeros! Exemplo: 1 <a:atencao:687759344095461482>")
    canal.send("O que é VDM?\n <a:1_:687759535053733929> Matar alguém fora da área de PVP sem motivo aparente ou sem nenhum RP introduzido..\n <a:2_:687759545069862997> Atropelar/usar veiculo como arma.\n <a:3_:687759556373381223> Dirigir sem CNH.").then(msg => {
        const coletor2 = new Discord.MessageCollector(msg.channel, filter, {maxMatches: 1});
        coletor2.on('collect', m2 => {
             if(m2.content == "2"){
                   acertou++
                }else{
                    errou++
                }
                    coletor2.stop();
    canal.send("O que é RDM?\n <a:1_:687759535053733929> É o ato de matar alguém.\n <a:2_:687759545069862997> Ficar matando meus amigos por brincadeira.\n <a:3_:687759556373381223> Modo mata-mata do RP.\n <a:4_:687759566825455680> Saltar de uma ponte.")
        const coletor3 = new Discord.MessageCollector(msg.channel, filter, {maxMatches: 1});
        coletor3.on('collect', m3 => {
            if(m3.content == "3"){
                acertou++
            }else{
                errou++
            }
            coletor3.stop();

    canal.send("O que é DarkRP?\n <a:1_:687759535053733929> Atropelar todo mundo\n <a:2_:687759545069862997> Fazer RP de racista ou estupro\n <a:3_:687759556373381223> Abusar de bugs")
        const coletor4 = new Discord.MessageCollector(msg.channel, filter, {maxMatches: 1});
        coletor4.on('collect', m4 => {
                if(m4.content == "2"){
                    acertou++
                }else{
                    errou++
                }
                coletor4.stop();
    canal.send("O que é MetaGaming?\n <a:1_:687759535053733929> É utilizar informações dentro do RP obtidas fora do RP\n <a:2_:687759545069862997> É matar pessoas sem algum motivo ou razão\n <a:3_:687759556373381223> É andar sobre montanhas com carros que não fariam isso na vida real")
        const coletor5 = new Discord.MessageCollector(msg.channel, filter, {maxMatches: 1});
        coletor5.on('collect', m5 => {
                if(m5.content == "1"){
                    acertou++
                }else{
                    errou++
                }
                        coletor5.stop();
    canal.send("O que é safezone?\n <a:1_:687759535053733929> São lugares para regenerar a vida\n <a:2_:687759545069862997> São lugares onde se vende armas\n <a:3_:687759556373381223> São lugares em que NÃO se pode roubar ou matar")
        const coletor6 = new Discord.MessageCollector(msg.channel, filter, {maxMatches: 1});
        coletor6.on('collect', m6 => {
                if(m6.content == "3"){
                    acertou++
                }else{
                    errou++
                }
                        coletor6.stop();
    canal.send("O que é PowerGaming?\n <a:1_:687759535053733929> Fazer algo no jogo, que PODE ser feito na vida real\n <a:2_:687759545069862997> Sair matando as pessoas na cidade.\n <a:3_:687759556373381223> Fazer algo no jogo, que NÃO PODE ser feito na vida real.")
        const coletor7 = new Discord.MessageCollector(msg.channel, filter, {maxMatches: 1});
        coletor7.on('collect', m7 => {
                if(m7.content == "3"){
                    acertou++
                }else{
                    errou++
                }
                        coletor7.stop();
    canal.send("Você está em uma ação e o FiveM fecha durante a ação, o que você faz?\n <a:1_:687759535053733929> Nada\n <a:2_:687759545069862997> Abro o FiveM novamente e volto para ação.\n <a:3_:687759556373381223> Tiro um print do erro do FiveM e mando no Discord e depois volto para ação")
        const coletor8 = new Discord.MessageCollector(msg.channel, filter, {maxMatches: 1});
        coletor8.on('collect', m8 => {
                if(m8.content == "3"){
                    acertou++
                }else{
                    errou++
                }
                        coletor8.stop();
    canal.send("O que é Combat Log?\n <a:1_:687759535053733929>  Deslogar no meio da Ação.\n <a:2_:687759545069862997> Atirar em Safes.\n <a:3_:687759556373381223> Troca de tiro.")
        const coletor9 = new Discord.MessageCollector(msg.channel, filter, {maxMatches: 1});
        coletor9.on('collect', m9 => {
                if(m9.content == "1"){
                    acertou++
                }else{
                    errou++
                }
                        coletor9.stop();
    canal.send("O que é RP?\n <a:1_:687759535053733929> Interpretar/Encenar um personagem.\n <a:2_:687759545069862997> Roleplay.\n <a:3_:687759556373381223> Não matar.")
        const coletor10 = new Discord.MessageCollector(msg.channel, filter, {maxMatches: 1});
        coletor10.on('collect', m10 => {
                if(m10.content == "1"){
                      acertou++
                }else{
                       errou++
                }
                        coletor10.stop();
    canal.send("O que significa Anti amor a vida?\n <a:1_:687759535053733929> Matar sem motivo aparente.\n <a:2_:687759545069862997> Dirigir sem habilitação.\n <a:3_:687759556373381223> Chamar um staff sem motivo.\n <a:4_:687759566825455680> Reagir a uma abordagem com arma de fogo em desvantagem ou colocar sua vida em risco.")
        const coletor11 = new Discord.MessageCollector(msg.channel, filter, {maxMatches: 1});
        coletor11.on('collect', m11 => {
                if(m11.content == "4"){
                      acertou++
                }else{
                       errou++
                }
                        coletor11.stop();
    canal.send("Qual dessas area nao é safe-zone?\n <a:1_:687759535053733929> Mecanica.\n <a:2_:687759545069862997>Hospital.\n <a:3_:687759556373381223> Loja de roupa.\n <a:4_:687759566825455680> Concessionária.")
        const coletor12 = new Discord.MessageCollector(msg.channel, filter, {maxMatches: 1});
        coletor12.on('collect', m12 => {
                if(m12.content == "3"){
                      acertou++
                }else{
                       errou++
                }
                        coletor12.stop();
    canal.send("Oque você deve fazer caso façam anti-rp em cima de você?\n <a:1_:687759535053733929> Continuar com o RP e denunciar o mesmo.\n <a:2_:687759545069862997> Continuar com o RP e chamar adm no privado.\n <a:3_:687759556373381223> Reagir com anti-rp.\n <a:4_:687759566825455680> Chamar ADM.")
        const coletor13 = new Discord.MessageCollector(msg.channel, filter, {maxMatches: 1});
        coletor13.on('collect', m13 => {
                if(m13.content == "1"){
                      acertou++
                }else{
                       errou++
                }
                        coletor13.stop();
    canal.send("Como deve-se reagir quando uma arma é apontada para você?\n <a:1_:687759535053733929> Revidando de imediato.\n <a:2_:687759545069862997>Tentar fugir do local.\n <a:3_:687759556373381223> Xingar quem está apontando arma.\n <a:4_:687759566825455680>Levantar as mãos demonstrando rendição.")
        const coletor14 = new Discord.MessageCollector(msg.channel, filter, {maxMatches: 1});
        coletor14.on('collect', m14 => {
                if(m14.content == "1"){
                      acertou++
                }else{
                       errou++
                }
                        coletor14.stop();
             Database.BemVindo.findOne({guilda: message.guild.id}, function(erro, dados) { 
                if(dados){
        const passou = new Discord.RichEmbed()
        .setTitle("Parabens você foi aprovado! <a:verify:687759351330766901> ")
        .setDescription(`Voce acertou ${acertou} Perguntas de 13`)
        .setThumbnail(message.guild.iconURL)
        .setFooter(message.guild.name + " © 2020", client.user.avatarURL)
        .setTimestamp(new Date())

        const passou2 = new Discord.RichEmbed()
        .setTitle("Membro Aprovado <a:verify:687759351330766901> ")
        .addField("**__O Membro aprovado:__**", `> ${message.member.user}`, true)
        .addField("**__ID No Servidor:__**", `> ${mensagem0}`, false)
        .addField("**__Acertou:__**", `> ${acertou} Perguntas de 13`, true)
        .addField("**__IP para conectar no Servidor:__**", "```css\n connect 35.247.215.39```", false)
        .setThumbnail(message.guild.iconURL)
        .setFooter(message.guild.name + " © 2020", client.user.avatarURL)
        .setTimestamp(new Date())

        const reprovado = new Discord.RichEmbed()
        .setTitle("Ops! Você foi reprovado! <a:atencao:687759344095461482> ")
        .setDescription(`Você não acertou as perguntas!`)
        .setThumbnail(message.guild.iconURL)
        .setFooter(message.guild.name + " © 2020", client.user.avatarURL)
        .setTimestamp(new Date())

        const reprovou2 = new Discord.RichEmbed()
        .setTitle("Membro reprovado <a:atencao:687759344095461482> ")
        .addField("**__O Membro reprovado:__**", `> ${message.member.user}`, true)
        .addField("**__ID No Servidor:__**", `> ${mensagem0}`, false)
        .addField("**__Acertou:__**", `> ${acertou} Perguntas de 13`, true)
        .setThumbnail(message.guild.iconURL)
        .setFooter(message.guild.name + " © 2020", client.user.avatarURL)
        .setTimestamp(new Date())

        let dc = 'https://discord.gg/5QGKNdR'

    if(acertou>errou){ 
    message.member.addRole(dados.group) &&  message.member.removeRole(dados.groupbemvindo) && message.member.setNickname(`${mensagem0} | ${mensagem1}`) && connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = '${mensagem0}'`) 
    canal.send(passou)
    try{
        client.channels.get(dados.aprovado).send(passou2)
    } catch (err) {
        const erro = new Discord.RichEmbed()
        .setTitle(`Aconteceu um erro!`)
        .setDescription(`** ${err}** entre no meu [Discord](${dc}) para suporte`)
        .setFooter(message.guild.name + " © 2020", client.user.avatarURL)
        message.reply(erro);}
        }else{
    if(acertou<errou){
        canal.send(reprovado)
        try{
            client.channels.get(dados.reprovado).send(reprovou2)
        } catch (err) {
            const erro = new Discord.RichEmbed()
            .setTitle(`Aconteceu um erro!`)
            .setDescription(`** ${err}** entre no meu [Discord](${dc}) para suporte`)
            .setFooter(message.guild.name + " © 2020", client.user.avatarURL)
            message.reply(erro);}
                    }
        }
canal.send("Esse canal Sera deletado em 10 Segundos! ")
setTimeout(() => {
    canal.delete();
    }, 10000)
                }
            })
            })
        }
        );
    });
});
});
});
});
});
});
});
});
});
});
});
});
});
});
    });
});
}catch (err) {
    return util.embed("Ocorreu um erro!. \n**Console:**\n```js\n"+err+"```");
  }
}
    }