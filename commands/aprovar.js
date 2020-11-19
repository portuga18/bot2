const Discord = require('discord.js')
const mysql = require('mysql');
const Database = require("../Data/database.js");
const config = require('../config.js');
let dc = 'https://discord.gg/54fhpcU'

exports.run = async (client, message, args) =>{
    let prefix = config.prefix //prefix do bot
message.delete()

    //Entrando na mysql
    if(message.content.startsWith(prefix + 'aprovar')) { //nome do comando pode ser trocado para o q vc quiser
        const mysql = require('mysql'); 
        //Entrando na mysql
        const connection = mysql.createConnection({ //Info da database, para conectar
          host: 'localhost',
          user: 'root',
          password: '',
          database: 'vrp'
        });
        connection.connect((err) => {
        });
        if(!message.guild.member(message.author.id).hasPermission("BAN_MEMBERS")) return message.channel.send({ //Só é liberado o comando caso a pessoa tenha a permissão de banir
            embed:{title: 'Você não tem permissão para usar este comando!',color: 0xFFFF00}
          })
    
const args = message.content.slice(prefix.length).trim().split(/ +/g);

        const sayMessage = args.slice(1).join(" ").split(", ").slice(", ");
        let id = sayMessage[0]
        let nome = sayMessage[1]
        let discord = sayMessage[2]


        if(!id){
          message.reply("Use o formato .aprovar <ID>, <Nome Do personagem>, <@Nome Do membro>")
          return
      }

      if(!nome){
        message.reply("Use o formato .aprovar <ID>, <Nome Do personagem>, <@Nome Do membro>")
        return
    }

    if(!discord){
      message.reply("Use o formato .aprovar <ID>, <Nome Do personagem>, <@Nome Do membro>")
      return
  }

          setInterval(function () {
            connection.query('SELECT 1');
          }, 5000);
      
        
            connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = '${id}'`, (err, rows) => { 
    
            message.reply(`**o membro ${discord} foi aprovado na whitelist!**`).then(msg => msg.delete(10000)) 
    
            Database.BemVindo.findOne({guilda: message.guild.id}, function(erro, dados) { 
              if(dados){
                let membro = message.mentions.members.first()
                membro.setNickname(`${nome} | ${id}`)
                membro.addRole(dados.group) 

            var usuario = new Discord.RichEmbed()
            .setTitle("Aprovado <a:verify:687759351330766901>")
            .addField("**__O Membro aprovado:__**", `> ${discord}`, true)
            .addField("**__Nome do personagem:__**", `> ${nome}`, false)
            .addField("**__ID No Servidor:__**", `> ${id}`, false)
            .addField("**__Aprovado por:__**", `> ${message.author}`, true)
            //.addField("**__Acertou:__**", `> ${acertou} Perguntas de 8`, true)
            .addField("**__IP para conectar no Servidor:__**", "```css\n connect 130.185.238.112```", false)
            //.setDescription(`Aprovado <a:verify:687759351330766901>\n **__O Membro aprovado:__**\n> ${discord}\n **__Noem do personagem:__** \n > ${nome}\n **__ID no servidor:__**\n > ${id}\n **__IP para conectar no servidor:__** \n > connect Tal  `)
            .setColor(0xFFFF00)
            .setTimestamp(new Date())
            .setThumbnail(message.guild.iconURL)
            .setFooter(message.guild.name + " © 2020", client.user.avatarURL)
            try {
            client.channels.get(dados.aprovado).send(usuario); //Aqui vamos pegar o id do servidor/canal
          } catch (err) {
            const erro = new Discord.RichEmbed()
            .setTitle(`Aconteceu um erro!`)
            .setDescription(`Não foi possivel achar o canal para enviar a mensagem do sistema de **aprovar**. Peça a um administrador para usar .setarcanalaprovadoswhitelist #canal. \n Caso continue com o erro, entre em contato com o desenvolvidor <@392125887975522304>`)
            .setFooter(`Atensiosamente FiveBot `, client.user.avatarURL)
            message.reply(erro).then(msg => msg.delete(10000)); 
          }
        }
        });
            }
            )
        }
      
    }