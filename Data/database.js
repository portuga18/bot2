var mongoose = require("mongoose") // faz requisicao do mongoose
var Schema = mongoose.Schema // só para deixar bonitinho
mongoose.connect("mongodb+srv://teste:teste@cluster0-skmsg.mongodb.net/test?retryWrites=true&w=majority", { // Onde pegamos o link, da conexão em Cluster
useNewUrlParser: true,
useUnifiedTopology: true
}).then(function () { // Caso Logue Corretamente
    console.log('\x1b[32m[ BANCO DE DADOS ] \x1b[0mBanco de dados foi ligado');
}).catch(function () { // Caso de ERRO
    console.log('\x1b[31m[ BANCO DE DADOS ] \x1b[0mBanco de dados desligado por erro');
});

// Iremos fazer um pequeno databse do usuário:
var User = new Schema({
    _id: { type: String, required: true }, // ID Do Usuário
    rank: { type: Number, default: 1 }, // Rank do Usuário
    xp: { type: Number, default: 0 }, // Xp do Usuário
    money: { type: Number, default: 0 }, // Dinheiro do Usuário
})
/* Colocamos assim, o nome do que queremos (que nem um Objeto sabe?)
money: { type: Number, default: 0 },
Type: será o formato dele (Number = Número, String = Texto, Boolean = true/false)
default: será o valor inicial que todos irão ter
required: è que é NECESSÀRIO TER
*/

// Aqui é a exportação. para usar essa base do documento, fora desse código (Troca de documentos)
var Users = mongoose.model("Users", User);
exports.Users = Users

var Channel = new Schema({
    idcanal: { type : String},
    guilda: {type : String},
    pedirset: {type : String},
    sugestao: {type:String},
    reportar: {type : String},
    wl: {type : String},
    unwl: {type : String},
    ban: {type : String},
    adv1: {type : String},
    adv2: {type : String},
    adv3: {type : String},
    advs: {type : String},
    groupbemvindo: {type : String},
    reprovado: {type : String},
    aprovado: {type : String},
    group: {type : String},
    saida: {type : String},
    dr: {type : String},
    //Sistema On/Off
    sai: {type : Number},
  });
  var Bem = mongoose.model("Mensagem", Channel);
  exports.BemVindo = Bem;
