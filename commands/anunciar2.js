const MessageEmbed = require('discord.js').MessageEmbed

module.exports = {
    run: (client, message, args) => {

        message.delete()

        if(!message.member.hasPermission(`ADMINISTRATOR`) ) return await message.channel.cache.send('<:errado:739528758456877146> Comando restrito para os **Administradores**').then(msg => msg.delete({ timeout: 5000, reason: 'It had to be done.' }));;
        let embed2 = new MessageEmbed()
        .setDescription(`<:everyone:687759347522207806> ${message.guild.name} › Anunciar \n \n Qual canal deseja enviar o anuncio?`)
        .setColor([153, 0, 204])
        message.channel.cache.send(embed2).then(msg1 => {
            let c1 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
            .on('collect', c => {
                canal = c.mentions.channels.first()
                if(!canal) {
                    message.channel.cache.send(`<:everyone:687759347522207806> ${message.guild.name} › Anunciar \n \n O canal que você mencionou é inválido!`)
                } else {
                    message.channel.cache.send(new MessageEmbed()
                    .setDescription(`<:everyone:687759347522207806> ${message.guild.name} › Anunciar \n \n Qual será o título do anúncio?`)
                    .setColor([153, 0, 204])).then(msg2 => {
                        let c2 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                        .on('collect', c => {
                            título = c.content
                            message.channel.cache.send(new MessageEmbed()
                            .setDescription(`<:everyone:687759347522207806> ${message.guild.name} › Anunciar \n \n Diga-me qual mensagem deseja Anunciar`)
                            .setColor([153, 0, 204])).then(msg3 => {
                                let c3 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})    
                                .on('collect', c => {
                                    anuncio = c.content
    
                                    message.channel.cache.send(new MessageEmbed()
                                    .setDescription(`<a:manutencao1:738053753302810664> ${message.guild.name} › Anunciar \n \n Mensagem enviada com sucesso!`)
                                    .setColor([153, 0, 204]))
                                    let embed = new MessageEmbed()
                                    .setTimestamp()
                                    .setColor([153, 0, 204])
                                    .setThumbnail(message.author.avatarURL)
                                    .setDescription(`${título}` + `\n \n` + `${anuncio}`)
                                    .setFooter(`Anunciado por: ${message.author.username}`, message.author.avatarURL)
                                    client.channels.cache.get('738002851237724250').send(embed)
                                    canal.cache.send(`@here`).then(mensagem => {
                                       mensagem.delete()
                                   })
                                })
                            }) 
                        })
                    })
                }
            })
        })
    }
}