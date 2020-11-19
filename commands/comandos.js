const Discord = require("discord.js");

exports.run = async (client, message, args, prefix) =>{

    if (!args[0]){
    let embed = new Discord.RichEmbed()

    embed.setColor("#07d4fc") 
    .setTitle("Lista de Comandos por Categoria:")
    .addField("<a:setad:687759348327252003> `!comandos administração`", "exibe a lista de comandos para administração")
    .addField("<a:setad:687759348327252003> `!comandos configuração`", "exibe a lista de comandos para configurar o bot")
    .setFooter("Caso tenha duvidas contacte o desenvolvidor @Portuga#5997")
    message.channel.send(embed)
    }

if(args[0] === 'configuração' || 'configuracao'){
    let embed = new Discord.RichEmbed()

                .setColor("#07d4fc") 
                .setTitle("<a:servidor2:687759348159610934> Lista de Configuração por Sistema!")
                .setDescription(`Teste`)
                message.channel.send(embed).then(async msg => {
                     msg.react("🔙")
                     
    const usuario = message.author
    const collector = await msg.createReactionCollector((reaction, user) => reaction.emoji.id === "🔙" && user === usuario);
    collector.on('collect', async (reaction, user) => {
        if (reaction.emoji.id === "🔙") {
      
        let embed2 = new Discord.RichEmbed()
          .setDescription(`Configuracao `)
          .setImage(`Configuracao`)
          .setColor(`#2f3136`)
        message.channel.send(embed2);

        }
    });
                })

    };
    

if(args[0] === 'administração' || 'administracao'){
        //Aqui vai enviar os comandos de configuração
        
        let embed = new Discord.RichEmbed()

        embed.setColor("#07d4fc") 
        embed.setDescription(`Teste2`)
        message.channel.send(embed)

        }

    }