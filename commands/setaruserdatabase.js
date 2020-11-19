exports.run = async (client, message, args) => {
    try {
    var util = require("../index");
      /* ----------------------------- */ 
      message.delete();
      var ss3 = args.join(" ");
      
if (!message.member.hasPermission("ADMINISTRATOR")) return await message.channel.send('<:errado:739528758456877146> Comando restrito para os **Administradores**').then(msg => msg.delete({ timeout: 5000, reason: 'It had to be done.' }));;
            users[message.guild.id] =  {
            guild: message.guild.id,
            user: ss3
        };
    
      fs.writeFile('./auth/users.json', JSON.stringify(users), (err) => {
          if(err) {
            
              util.embed("Aconteceu alguma coisa!...\n**Console:**\n```js\n"+err+"```");
              return;
          } else {
            log(`Used Command [Set] to ${ss3} | ${message.guild.name}`)
            
              util.good(`Você setou ${message.guild.name} com o IP: *${ss3}*`)
              return;
          }
      })
    } catch (err) {
        log(err)
    }
      
};