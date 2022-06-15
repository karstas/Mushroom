module.exports = {
  name: 'status',
    execute(mushroom, message, args){
      const config = require(__dirname + '/../config.json')
      var randno = config.denied[Math.floor(Math.random() * config.denied.length)];
      if (message.author.id === process.env.ownerID){
      if(!args.length) return message.reply('errou a ordem');
      var type = args.shift().toUpperCase();
      var activity = args.join(' ');
      mushroom.user.setActivity(activity,{ "type":type})
      .catch(console.error);
      }
      else
      {
        message.channel.send(randno);
      }
    }
}
