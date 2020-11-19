const Discord = require('discord.js')
exports.run = (client, message, args) => {
    message.delete(10000)

    if(!message.member.hasPermission('MANAGE_MESSAGES')) {
      return await message.channel.send('<:errado:739528758456877146> Comando restrito para os **Administradores**').then(msg => msg.delete({ timeout: 5000, reason: 'It had to be done.' }));;
        
      }
      var lock = message.guild.roles.find("name","@everyone")
      message.channel.overwritePermissions(lock, {
        SEND_MESSAGES: true
      });
       
      message.channel.send(`<a:verify:685180136726986885> | O canal ${message.channel} foi __desbloqueado__ com sucesso.`);
        }

exports.config = {
    name: "liberarcanal",
    aliases: ["lock"]
  }