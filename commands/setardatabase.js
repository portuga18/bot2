exports.run = async (client, message, args) => {
    try {
    var util = require("../index");
      /* ----------------------------- */ 
      message.delete();
      var ss5 = args.join(" ");
      
if (!message.member.hasPermission("ADMINISTRATOR")) return await message.channel.send('<:errado:739528758456877146> Comando restrito para os **Administradores**').then(msg => msg.delete({ timeout: 5000, reason: 'It had to be done.' }));;
            db[message.guild.id] =  {
            guild: message.guild.id,
            dbs: ss5
        };
    
      fs.writeFile('./auth/database.json', JSON.stringify(db), (err) => {
          if(err) {
            
              util.embed("Aconteceu alguma coisa!...\n**Console:**\n```js\n"+err+"```");
              return;
          } else {
            log(`Used Command [Set] to ${ss5} | ${message.guild.name}`)
            
              util.good(`Você setou ${message.guild.name} com o database: *${ss5}*`)
              return;
          }
      })
    } catch (err) {
        log(err)
    }
      
};