module.exports = {
  name: 'roll',
  execute(mushroom, message, args) {
    args = args.join(' ').split('d');
    //if (args[0] == isNaN()) return message.channel.send('Você não conseguiu rolar um dado...');
    quantidade = args[0], dados = args[1];
    if(quantidade>='201' || dados>='256') return;
    var rolagem = Math.floor(Math.random()*dados);
    message.channel.send(quantidade*rolagem+1);
    console.log(args);
  }
}
