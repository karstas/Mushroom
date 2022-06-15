require('dotenv').config();
const Discord = require("discord.js");
const mushroom = new Discord.Client();
mushroom.commands = new Discord.Collection();
const config = require('./config.json');
const reacts = require('./reacts.json');
const fs = require('fs');
const commandFiles =
 fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    mushroom.commands.set(command.name, command);
}
mushroom.on("ready", () => {
  console.log("Tô pronta <3 !");
  var avatar = config.avatar[Math.floor(Math.random() * config.avatar.length)];
  //mushroom.user.setAvatar(avatar)
  var tipo = Math.floor(Math.random()*3);
  var atividade;
  if (tipo === 0) {
    tipo = "WATCHING";
    var atividade = config.WATCHING[Math.floor(Math.random() * config.WATCHING.length)];
  }
  else
  if (tipo === 1) {
    tipo = "PLAYING";
    var atividade = config.PLAYING[Math.floor(Math.random() * config.PLAYING.length)];
  }
  else
  if (tipo === 2) {
    tipo = "LISTENING";
    var atividade = config.LISTENING[Math.floor(Math.random() * config.LISTENING.length)];
  }
    mushroom.user.setActivity(atividade,{ "type": tipo})
});
mushroom.on("error", e  =>{
  console.log(e);
});
mushroom.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.type === 'text');
  if (!channel) return;
  console.log(member)
  channel.send(`Seja bem vindo(a) ${member} !`);
  });
  var denied = config.denied
mushroom.on("message",async message => {
  if (message.author.bot) return;
  const msg = message.content.toLowerCase();;
    //if (message.content.includes("seu?")message.channel.send("NOSSO!").then(message.channel.send("https://i.imgur.com/0dcKn9K.png"))
    if(reacts[msg]){
     var react = reacts[msg];
     message.channel.send(react[Math.floor(Math.random()*react.length) ])}
if(!message.content.startsWith(process.env.prefix)) return;
var randno = denied[Math.floor(Math.random() * denied.length)];
const args = message.content.slice(process.env.prefix.length).trim().split(/ +/g);
if (message.guild && !message.member) await message.guild.fetchMember(message.author);
const command = args.shift().toLowerCase();
if(!mushroom.commands.has(command)) return;
try {
    mushroom.commands.get(command).execute(mushroom, message, args);
} catch (error) {
    console.error(error);
    message.reply('houve um erro ao tentar executar o comando!');
}
});
mushroom.login(process.env.token);
