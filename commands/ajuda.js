const Discord = require("discord.js");

exports.run = async (client, message, args) =>{
 
    let menu = new Discord.RichEmbed()
    .setColor("#FFFF00")
    .addField("🛠 | **__Administração__**", "- Reaja ao emoji 🛠 para ter acesso aos meus comandos de Administração.")
    .addField("🔨 | **__Configuração__**", "- Reaja ao emoji 🔨 para ter acesso aos meus comandos da configuracao.")
    .addField("👥 | **__Utilitários__**", "- Reaja ao emoji 👥 para ter acesso aos meus comandos Utilitários.")
    .addField("💵 | **__Clientes__**", "- Reaja ao emoji 💵 para ter acesso aos meus comandos Utilitários.")
    .setThumbnail(client.user.avatarURL)    
    .setFooter(message.guild.name + " © 2020", client.user.avatarURL)
 
 
    let administracao = new Discord.RichEmbed()
    .setColor("#FFFF00")
    .setDescription(`🛠 **__ADMINISTRAÇÃO__**  `)
    .addField("<:green:687759347283001444> **Banir player**", "<a:setad:687759348327252003> .ban @user <motivo>")
    .addField("<:green:687759347283001444> **Limpar canal**", "<a:setad:687759348327252003> .limpar (quantidade de mensagem)")
    .addField("<:green:687759347283001444> **Ira bloquear o canal que digitar!**", "<a:setad:687759348327252003> .fecharcanal ")
    .addField("<:green:687759347283001444> **Ira desbloquear o canal que digitar!**", "<a:setad:687759348327252003> .liberarcanal ")
    .addField("<:green:687759347283001444> **Para forçar o bot a digitar!**", "<a:setad:687759348327252003> .say <Mensagem> ")
    .addField("<:green:687759347283001444> **Para dar adv a uma pessoa!**", "<a:setad:687759348327252003> .adv @membro motivo ")
    .setThumbnail(client.user.avatarURL)
    .setFooter(message.guild.name + " © 2020", client.user.avatarURL)
 
    let configuracao = new Discord.RichEmbed()
    .setColor("#FFFF00")
    .setDescription(`🔨 **__Configuração__**  `)
    .addField("<:green:687759347283001444> **Ira atualizar o canal que ira aparecer a mensagem de banido do servidor!**", "<a:setad:687759348327252003> .setarcanalbanido #canal ")
    .addField("<:green:687759347283001444> **Ira atualizar o canal que ira aparecer a mensagem de bem vindo do discord!**", "<a:setad:687759348327252003> .setarcanalbemvindo #canal")
    .addField("<:green:687759347283001444> **Ira atualizar o canal que ira aparecer a mensagem de saiu do discord**", "<a:setad:687759348327252003> .setarcanalsaiu #canal")
    .addField("<:green:687759347283001444> **Ira atualizar o canal que ira aparecer a mensagem de pedir set a um player**", "<a:setad:687759348327252003> .setarcanalpedirset #canal")
    .addField("<:green:687759347283001444> **Ira atualizar o canal que ira aparecer a mensagem de reportar um player**", "<a:setad:687759348327252003> .setarcanalreportar #canal")
    .addField("<:green:687759347283001444> **Ira atualizar o canal que ira aparecer a mensagem de sugestao de um player**", "<a:setad:687759348327252003> .setarcanalsugestao #canal")
    .addField("<:green:687759347283001444> **Ira atualizar o canal que ira aparecer a mensagem de advertencias do discord!**", "<a:setad:687759348327252003> .setarcanaladvertencias #canal")
    .addField("<:green:687759347283001444> **Ira atualizar o grupo que ira setar a 1º advertencia!**", "<a:setad:687759348327252003> .setargrupoadv1 @grupo")
    .addField("<:green:687759347283001444> **Ira atualizar o grupo que ira setar a 2º advertencia!**", "<a:setad:687759348327252003> .setargrupoadv2 @grupo")
    .addField("<:green:687759347283001444> **Ira atualizar o grupo que ira setar a 3º advertencia!**", "<a:setad:687759348327252003> .setargrupoadv3 @grupo")
    .addField("<:green:687759347283001444> **Ira atualizar o grupo que quando um novo membro entrar será setado!**", "<a:setad:687759348327252003> .setargrupobemvindo @grupo")
    .setThumbnail(client.user.avatarURL)
    .setFooter(message.guild.name + " © 2020", client.user.avatarURL)

    let cliente = new Discord.RichEmbed()
    .setColor("#FFFF00")
    .setDescription(`💵 **__Clientes__**  `)
    .addField("<:green:687759347283001444> **Para ativar WL de um ID**", "<a:setad:687759348327252003> .aprovar <ID>, <Nome Do personagem>, <@Nome Do membro> ")
    .addField("<:green:687759347283001444> **Para retirar WL de um ID**", "<a:setad:687759348327252003> .reprovar ")
    .addField("<:green:687759347283001444> **Para banir um ID do servidor**", "<a:setad:687759348327252003> .bansv <ID de dentro do servidor>")
    .addField("<:green:687759347283001444> **Para player dar e fazer whitelist automatico.**", "<a:setad:687759348327252003> .whitelist")
    .addField("<a:atencao:687759344095461482> **Parte de configuração!**", "**Aqui em Baixo!**")
    .addField("<:green:687759347283001444> **Ira atualizar o grupo que ia setar quando ativar a WL do mesmo. (Comando .aprovado e .whitelist)**", "<a:setad:687759348327252003> .setargrupoaprovadoswhitelist @Group")
    .addField("<:green:687759347283001444> **Ira atualizar o canal que ira aparecer a mensagem de banimento de um player dentro do jogo**", "<a:setad:687759348327252003> .setarcanalbansv #canal")
    .addField("<:green:687759347283001444> **Ira atualizar o canal que ira aparecer a mensagem de aprovados de whitelist**", "<a:setad:687759348327252003> .setarcanalreprovadoswhitelist #canal")
    .addField("<:green:687759347283001444> **Ira atualizar o canal que ira aparecer a mensagem de reprovados de whitelist**", "<a:setad:687759348327252003> .setarcanalreprovadoswhitelist #canal")
    .setThumbnail(client.user.avatarURL)
    .setFooter(message.guild.name + " © 2020", client.user.avatarURL)

    let utilitarios = new Discord.RichEmbed()
    .setColor("#FFFF00")
    .setDescription(`👥 **__UTILITARIOS__**  `)
    .addField("<:green:687759347283001444> Para ver tudo sobre o bot!", "<a:setad:687759348327252003> .infobot")
    .addField("<:green:687759347283001444> Serve para pedir uma setagem dentro do discord ou do game!", "<a:setad:687759348327252003>  .pedirset")
    .addField("<:green:687759347283001444> Serve para reportar um player que fez alguma coisa de errado!", "<a:setad:687759348327252003>  .reportar")
    .addField("<:green:687759347283001444> Serve para sugerir alguma coisa para o servidor!", "<a:setad:687759348327252003>  .sugestao")
    .addField("<:green:687759347283001444> Para mandar uma mensagem no ilegal!", "<a:setad:687759348327252003>  .deepweb <Mensagem>")
    .addField("<:green:687759347283001444> Para mandar uma mensagem no instagram!", "<a:setad:687759348327252003>  .instagram <Mensagem>")
    .addField("<:green:687759347283001444> Para mandar uma mensagem no fora do RP!", "<a:setad:687759348327252003>  .forarp <Mensagem>")
    .setThumbnail(client.user.avatarURL)
    .setFooter(message.guild.name + " © 2020", client.user.avatarURL)
 
    message.channel.send(menu).then(async msg => {
        await msg.react("🔙")
        await msg.react("🛠")
        await msg.react("🔨")
        await msg.react("👥")
        await msg.react("💵")
 
        const collector = msg.createReactionCollector((r, u) => (r.emoji.name === '🛠', '🔙', '👥', '🔨', '💵') && (u.id !== client.user.id))
        collector.on("collect", r=> {
            switch(r.emoji.name) {
                case '🛠':
               
                msg.edit(administracao)
                break;
                case '🔨':
               
                msg.edit(configuracao)
                break;
                case '👥': 
               
                msg.edit(utilitarios)
                break;
                case '🔙':
               
                msg.edit(menu)
                break;
                case '💵':
               
                msg.edit(cliente)
                break;
               
               
            }
        })
    })
}