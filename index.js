const config = require('./config.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const Database = require("./Data/database.js")
        




client.on("message", message => {
    module.exports.num = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
    }
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
 
  let args = message.content.split(" ").slice(1);
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.log("Um comando nao foi encontrado.")
  }
});


client.on('message', (message) => {
  Database.BemVindo.findOne(function(erro, dados) { 
  if(!dados || dados){
    
  let canal = client.channels.cache.get(dados.whitelist)

  if (message.author.bot) return
  if (message.channel.id != dados.whitelist) return;
  if (!message.content.includes('!whitelist')) {
    message.delete()
    let embed = new Discord.MessageEmbed()
    .setTitle("Foi pego no pulo.")
    .setDescription("**Esse canal nao foi feito para bate papo!**\nDigite: ```!whitelist``` para realizar whitelist")
    .setColor("RANDOM")
    return canal.send(embed).then(msg => msg.delete({ timeout: 5000, reason: 'It had to be done.' }));


};
    }
  })
});

client.on('message', (message) => {
  Database.BemVindo.findOne(function(erro, dados) { 
  if(!dados || dados){

  let canal = client.channels.cache.get(dados.pedirset)

  if (message.author.bot) return
  if (message.channel.id != dados.pedirset) return;
  if (!message.content.includes('!pedirset')) {
    message.delete()
    let embed = new Discord.MessageEmbed()
    .setTitle("Foi pego no pulo.")
    .setDescription("**Esse canal nao foi feito para bate papo!**\nDigite: ```!pedirset```")
    .setColor("RANDOM")
    return canal.send(embed).then(msg => msg.delete({ timeout: 5000, reason: 'It had to be done.' }));


};
    }
  })
});

client.on('message', (message) => {
  Database.BemVindo.findOne(function(erro, dados) { 
  if(!dados || dados){

  let canal = client.channels.cache.get(dados.reportar)

  if (message.author.bot) return
  if (message.channel.id != dados.reportar) return;
  if (!message.content.includes('!denunciar')) {
    message.delete()
    let embed = new Discord.MessageEmbed()
    .setTitle("Foi pego no pulo.")
    .setDescription("**Esse canal nao foi feito para bate papo!**\nDigite: ```!denunciar```")
    .setColor("RANDOM")
    return canal.send(embed).then(msg => msg.delete({ timeout: 5000, reason: 'It had to be done.' }));


};
    }
  })
});

client.on('message', (message) => {
  Database.BemVindo.findOne(function(erro, dados) { 
  if(!dados || dados){

  let canal = client.channels.cache.get(dados.pedirset)

  if (message.author.bot) return
  if (message.channel.id != dados.pedirset) return;
  if (!message.content.includes('!sugestao')) {
    message.delete()
    let embed = new Discord.MessageEmbed()
    .setTitle("Foi pego no pulo.")
    .setDescription("**Esse canal nao foi feito para bate papo!**\nDigite: ```!sugestao```")
    .setColor("RANDOM")
    return canal.send(embed).then(msg => msg.delete({ timeout: 5000, reason: 'It had to be done.' }));


};
    }
  })
});

client.on("message", async message => {
 
  if(message.content.startsWith(`<@!${client.user.id}>`)){
  let embed = new Discord.MessageEmbed()
  .setColor("#ee3a8c")
  .setThumbnail(client.user.avatarURL)
  .setDescription(` - ${message.author}, deseja alguma coisa? -
      ㅤㅤㅤㅤㅤ
                       - | Precisando de uma ajuda? Você pode descobrir meus comandos usando \`${config.prefix}ajuda\`
 
                       - | Para mais informações contate meu criador no privado <@392125887975522304>`)
  .setTimestamp()
  .setFooter( message.guild.name + ` © 2020, todos os direitos reservados. `, message.author.avatarURL)
 
      message.channel.cache.send(embed);
  }
});

client.on('ready', () => {

  console.log('Estou online');
  var tabela = [
    { name: 'Developer by: Portuga#5997', type: 1 },
    { name: 'Ouvindo', type: 2 },
    { name: 'Assistindo', type: 3 },
    { name: 'jogando', type: 0},
  ];

  function setStatus() {
    var altstatus = tabela[Math.floor(Math.random() * tabela.length)]
    client.user.setActivity(altstatus)
  }
  setStatus("dnd")
  setInterval(() => setStatus(), 2000)
})
 
client.on('message', async message => {
  Database.BemVindo.findOne(function(erro, dados) { 
    if(dados){
  if (message.content.includes('discord.gg')) {
    message.delete()
    var antiinvite = new Discord.MessageEmbed()
    .setTitle("Achamos um intruso, pelo sistema de anti-invite!")
    .setDescription(`${message.author} \n Você foi barrado pelo sistema anti-invite!\n Se vir você tentando enviar um convite será banido do Discord!`)
    .setThumbnail("https://media.giphy.com/media/l2Je5IMLrZSbFD63S/giphy.gif")
    .setImage("https://gifimage.net/wp-content/uploads/2017/10/discord-ban-gif-4.gif")
    message.reply(antiinvite)


}
  if(message.channel.type === 'dm' || message.author.bot) return;
}
  });
});



client.on('guildMemberAdd', member => {

  Database.BemVindo.findOne({guilda: member.guild.id}, function(erro, dados) { 
    if(dados){

        let embedbemvindo = new Discord.MessageEmbed()
  .setTitle("Um Turista entrou na Cidade! :partying_face:")
  .setDescription("> Olá, " + member.user + "\n> Seja Bem-vindo ao " + member.guild.name +"  :tada:\n > Não esqueça de ler as regras do servidor para eviar punições \n > Qual duvida nao tenha medo de chamar um Staff \n > **No momento temos:** " + member.guild.memberCount + " habitantes na cidade") 
  .setColor("RANDOM")
  .setThumbnail(member.user.avatarURL)
  .setFooter(member.guild.name + " © 2020", client.user.avatarURL)
  .setTimestamp();
      
  //member.send("Bem vindo a Death RP, para realizar a whitelist va ate a sala <#720292368229859328>")

 
      member.roles.add(dados.groupbemvindo)   
     

      try{
      client.guilds.get(member.guild.id).channels.cache.get(dados.idcanal).send(embedbemvindo);
    } catch (err) {
      console.log("Nao Foi possivel achar o canal de bem vindo")
    }
}
    })
      });

client.on('guildMemberRemove', member => {

  Database.BemVindo.findOne({guilda: member.guild.id}, function(erro, dados) { 
    if(dados){

  let embedsaiu = new Discord.MessageEmbed()
  .setTitle("**Um turista saiu da Cidade!  **")
  .setDescription("> Até mais " + member.user.tag + "\n \n > No momento temos: **" + member.guild.memberCount + " habitantes na cidade**") 
  .setColor("#ff0000")
  .setThumbnail(member.user.avatarURL)
  .setFooter(member.guild.name + " © 2020", client.user.avatarURL)
  .setTimestamp();

try{
  client.guilds.get(member.guild.id).channels.cache.get(dados.saida).send(embedsaiu)
} catch (err) {
  console.log("Nao Foi possivel achar o canal de saiu")
}

        }
    })
});

client.login(config.token)