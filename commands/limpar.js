const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete()

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return await message.channel.send('<:errado:739528758456877146> Comando restrito para os **Administradores**').then(msg => msg.delete({ timeout: 5000, reason: 'It had to be done.' }));;
  if(!args[0]) return message.channel.send(`» ${message.member}, você deve usar **.limpar [quantidade de linhas]**`);
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`<a:seta:687759348125925392> ${args[0]} mensagens foram excluidas pelo STAFF ${message.member}`).then(msg => msg.delete({ timeout: 5000, reason: 'It had to be done.' }));;
  });
}
