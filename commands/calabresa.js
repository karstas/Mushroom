module.exports = {
  name: 'calabresa',
  execute(mushroom, message, args){
    args = args.join(' ').split('<');
    const config = require(__dirname + '/../config.json')
    var randno = config.denied[Math.floor(Math.random() * config.denied.length)];
    if(message.author.id === process.env.ownerID){
      var role = message.mentions.roles.first();
      if (!args[0]) return message.reply('Faltou escolher um novo nome.');
      if (!role) return message.reply('Faltou mencionar um cargo.');
      try{
        role.setName(args[0]).then(r => {
        message.channel.send('Sim');
        });
      }
      catch(e){
        message.channel.send('Ocorreu um erro.');
      }
    }
    else{
      message.channel.send(randno);
    }
  }
}
