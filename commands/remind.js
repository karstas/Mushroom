module.exports = {
  name: 'remind',
    execute(mushroom, message, args){
      args = args.join(' ').split(',');
      var dance = "\nhttps://i.imgur.com/vzMUjd7.gif "
      var texto = args[0]
      var  horas = args[1]
      var minutos = args[2]
      message.channel.send(`Vou te lembrar de ${texto} em ${horas} hora(s) e ${minutos} minuto(s)`);
      var horas = args[1]*3600000;
      var minutos = args[2]*60000;
      var tempo = horas+minutos;
      setTimeout(function() {message.author.send(texto + dance)}, tempo);
    }
}
