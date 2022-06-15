module.exports = {
  name: 'choose',
    execute(mushroom, message, args){
      args = args.join(' ').split(',');
      let choose = args[Math.floor(Math.random()*args.length)];
      if (args.length < 2)
      return message.channel.send('Dê-me ao menos duas opções!');
      message.channel.send(`<:thonk:277064410336591875>`).then(msg =>{
      message.channel.send(`Eu escolho: ${choose}`);
      console.log(args);
      });
    }
}
