module.exports = {
  name: 'ship',
    execute(mushroom, message, args){
      const Discord = require("discord.js");
      var percent = Math.floor(Math.random()*101);
      const user1 = message.mentions.users.first()
      const user2 = message.mentions.users.last()
      var texto, imagem, barra;
      if(percent == 0){
        barra = "| . . . . . . . . . . |"
        texto = 'Tipo bonnie e Clyde, só que sem amor'
        imagem = 'https://cdn.discordapp.com/attachments/646387597483966467/650056559833120768/unknown.png'
      }
      else if(percent <= 10){
        barra = "| █ .   . . . . . . . . |"
        texto = 'Talvez até uma amizade seja forçar demais.'
        imagem = 'https://66.media.tumblr.com/eb7c981b4e2ee0867bc06e96cadeb3c2/tumblr_pb7gtrTYQ41v5pucyo4_250.png'
      }
      else if(percent <= 20){
        barra = "| █ █ . . . . . . . . |"
        texto = 'Talvez até uma amizade seja forçar demais.'
        imagem = 'https://66.media.tumblr.com/eb7c981b4e2ee0867bc06e96cadeb3c2/tumblr_pb7gtrTYQ41v5pucyo4_250.png'
      }else if(percent <= 40){
        barra = "| █ █ █ . . . . . . . |"
        texto = 'É, não é um dos melhores. um dos piores ? quem sabe'
        imagem = 'https://cdn.discordapp.com/attachments/646387597483966467/650057063824621578/unknown.png'
      }
      else if(percent <= 60){
      barra = "| █ █ █ █ █ . . . . . |"
      texto = 'Não é um par perfeito, mas se encaixam...um pouco'
      imagem = 'https://cdn.discordapp.com/attachments/646387597483966467/650058095158099968/unknown.png'
      }
      else if(percent <= 80){
      barra = "| █ █ █ █ █ █ █ . . . |"
      texto = 'Topíssimo'
      imagem = 'https://cdn.discordapp.com/attachments/646387597483966467/650057210587643904/unknown.png'
      }
      else if(percent <= 99){
      barra = "| █ █ █ █ █ █ █ █ . . |"
      texto = 'O melhor casal que eu vi hoje!'
      imagem = 'https://cdn.discordapp.com/attachments/646387597483966467/650060166364004372/unknown.png'
      }
      else if(percent == 100){
      barra = "|██████████|"
      texto = 'Não sei o que dizer, é uma combinação tão boa e tão rara, que fiquei sem criatividade pra elogios!'
      imagem = 'https://cdn.discordapp.com/attachments/646387597483966467/650060124848914453/unknown.png'
      }
      const embed = new Discord.MessageEmbed()
        .setTitle(`${barra} ${percent} %`)
        .setDescription(`${user1.username} e ${user2.username}\n${texto}`)
        .setColor(0x1269DC)
        .setImage(imagem);
        message.channel.send(embed);
      }
    }
