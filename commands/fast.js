const Discord =require('discord.js')
const mysql = require('mysql');
const Database = require("../Data/database.js");
const config = require('../config.js');



exports.run = async(client, message, args) => {



message.delete()
const connection = mysql.createConnection({ //Info da database, para conectar
          host: 'localhost',
          user: 'root',
          password: '',
          database: 'vrp'
        });
  connection.connect((err) => {
      console.log(err)
    });

      setInterval(function () {
        connection.query('SELECT 1');
      }, 5000);  

    var acertou = 0;
    var errou = 0;

    
    if(!message.member.hasPermission("SEND_MESSAGES")) return message.reply("você não tem a permissão ``SEND_MESSAGES``!");
    if(message.channel.type === "dm") return;
    message.guild.createChannel(`whitelist ${message.author.username}` , {type: 'text'}).then(canal => {
        canal.overwritePermissions(message.guild.defaultRole, {
            VIEW_CHANNEL: false
        })
        canal.overwritePermissions(message.member, {
            VIEW_CHANNEL: true
        })

        canal.setParent('718567875807412276');
        
        setTimeout(() => {
            canal.delete();
            }, 300000)
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
    canal.send("Qual sua idade?").then(msg => {
                        const coletor2 = new Discord.MessageCollector(msg.channel, filter, {maxMatches: 1});
                        coletor2.on('collect', m2 => {
                             if(m2.content == "2"){
                                   acertou++
                                }else{
                                    errou++
                                }
                                    coletor2.stop();
             Database.BemVindo.findOne({guilda: message.guild.id}, function(erro, dados) { 
                if(dados){
        const passou = new Discord.RichEmbed()
        .setTitle("Parabens você foi aprovado pelo sistema! <a:verify:687759351330766901> ")
        .setDescription("Não quebre as regras! E bom RP")
        .setThumbnail(message.guild.iconURL)
        .setFooter( `Atenciosamente ${message.guild.name}`)
        .setTimestamp(new Date())

        const passou2 = new Discord.RichEmbed()
        .setTitle("Membro Aprovado pelo sistema <a:verify:687759351330766901> ")
        .addField("**__O Membro aprovado:__**", `> ${message.member.user}`, true)
        .addField("**__ID No Servidor:__**", `> ${mensagem0}`, false)
        .addField("**__IP para conectar no Servidor:__**", "```css\n connect 130.185.238.112```", false)
        .setFooter( `Atenciosamente ${message.guild.name}`)
        .setTimestamp(new Date())

        let dc = 'https://discord.gg/5QGKNdR'

    if(acertou>errou){ 
        message.member.addRole(dados.group) 
        message.member.addRole(dados.group) 
        message.member.addRole(dados.group) 
        message.member.addRole(dados.group) 
        message.member.addRole(dados.group) 
        message.member.removeRole(dados.groupbemvindo)
        message.member.removeRole(dados.groupbemvindo)
        message.member.removeRole(dados.groupbemvindo)
        message.member.removeRole(dados.groupbemvindo)
        message.member.removeRole(dados.groupbemvindo)
        message.member.setNickname(`#${mensagem0} ${mensagem1}`)
        message.member.setNickname(`#${mensagem0} ${mensagem1}`)
        message.member.setNickname(`#${mensagem0} ${mensagem1}`)
        message.member.setNickname(`#${mensagem0} ${mensagem1}`)
        message.member.setNickname(`#${mensagem0} ${mensagem1}`)
        message.member.setNickname(`#${mensagem0} ${mensagem1}`)
        message.member.setNickname(`#${mensagem0} ${mensagem1}`)
        message.member.setNickname(`#${mensagem0} ${mensagem1}`)
        connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = '${mensagem0}'`) 
        connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = '${mensagem0}'`) 
        connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = '${mensagem0}'`) 
        connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = '${mensagem0}'`) 
        connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = '${mensagem0}'`) 
        connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = '${mensagem0}'`) 
        connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = '${mensagem0}'`) 
    canal.send(passou)
    try{
        client.channels.get(dados.aprovado).send(passou2)
    } catch (err) {
        const erro = new Discord.RichEmbed()
        .setTitle(`Aconteceu um erro!`)
        .setDescription(`** ${err}** entre no meu [Discord](${dc}) para suporte`)
        .setFooter(`Atensiosamente FiveBot `, client.user.avatarURL)
        message.reply(erro);}
        }else{
    if(acertou<errou){
        message.member.addRole(dados.group) 
        message.member.addRole(dados.group) 
        message.member.addRole(dados.group) 
        message.member.addRole(dados.group) 
        message.member.addRole(dados.group) 
        message.member.removeRole(dados.groupbemvindo)
        message.member.removeRole(dados.groupbemvindo)
        message.member.removeRole(dados.groupbemvindo)
        message.member.removeRole(dados.groupbemvindo)
        message.member.removeRole(dados.groupbemvindo)
        message.member.setNickname(`#${mensagem0} ${mensagem1}`)
        message.member.setNickname(`#${mensagem0} ${mensagem1}`)
        message.member.setNickname(`#${mensagem0} ${mensagem1}`)
        message.member.setNickname(`#${mensagem0} ${mensagem1}`)
        message.member.setNickname(`#${mensagem0} ${mensagem1}`)
        message.member.setNickname(`#${mensagem0} ${mensagem1}`)
        message.member.setNickname(`#${mensagem0} ${mensagem1}`)
        message.member.setNickname(`#${mensagem0} ${mensagem1}`)
        connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = '${mensagem0}'`) 
        connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = '${mensagem0}'`) 
        connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = '${mensagem0}'`) 
        connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = '${mensagem0}'`) 
        connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = '${mensagem0}'`) 
        connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = '${mensagem0}'`) 
        connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = '${mensagem0}'`) 
    canal.send(passou)
    try{
        client.channels.get(dados.aprovado).send(passou2)
    } catch (err) {
        const erro = new Discord.RichEmbed()
        .setTitle(`Aconteceu um erro!`)
        .setDescription(`** ${err}** entre no meu [Discord](${dc}) para suporte`)
        .setFooter(`Atensiosamente FiveBot `, client.user.avatarURL)
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
}