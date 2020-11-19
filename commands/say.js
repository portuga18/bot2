const Discord = require('discord.js')
exports.run = (client, message, args) => {
    if (!args.join(" ")) return message.reply("Digite algo para eu falar!");
    let say = args.join(' ');

    if (!message.member.hasPermission("BAN_MEMBERS")) return await message.channel.send('<:errado:739528758456877146> Comando restrito para os **Administradores**').then(msg => msg.delete({ timeout: 5000, reason: 'It had to be done.' }));;

    message.delete()
    let embed = new Discord.RichEmbed()

                embed.setColor("RANDOM") 
                embed.setTitle("")
                embed.setDescription(`${say}`)
                embed.setFooter( `Atenciosamente ${message.guild.name}`)
                embed.setThumbnail(`${message.guild.iconURL}`)
                embed.setColor("#000000")
                message.channel.send(embed)

   
        }