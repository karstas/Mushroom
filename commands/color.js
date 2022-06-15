module.exports = {
  name: 'color',
  execute(mushroom, message, args){
    var role = message.mentions.roles.first();
    if (!args[0]) return message.reply('Faltou escolher uma cor.');
    if (!role) return message.reply('Faltou mencionar um cargo.');
    try{
    role.setColor(args[0]).then(r => {
      message.channel.send(`Cor do cargo ${r.name} alterada para ${args[0]}`);
    });
    }
    catch(e){
    message.channel.send('Ocorreu um erro.');
    console.log(e);
    }
  }
}
