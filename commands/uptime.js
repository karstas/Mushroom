module.exports = {
  name: 'uptime',
    execute(mushroom, message, args){
      const config = require(__dirname + '/../config.json')
      var randno = config.denied[Math.floor(Math.random() * config.denied.length)];
      if (message.author.id === process.env.ownerID){
        var uptime = mushroom.uptime;
        var horas = 0, min = 0, seg = 0;
        if(uptime > 3600000){
          for(horas = 0; uptime > 3600000; horas++){
             uptime -= 3600000;
          }
        }
        if(uptime > 60000){
          for(min = 0; uptime > 60000; min++){
             uptime -= 60000;
          }
        }
        if(uptime > 1000){
          for(seg = 0; uptime > 1000; seg++){
             uptime -= 1000;
          }
        }
        message.channel.send(`Ativa por ${horas}h ${min}min ${seg}s`);
    }
      else{
        message.channel.send(randno);
      }
    }
  }
