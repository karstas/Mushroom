module.exports = {
  name: 'avatar',
  execute(mushroom, message, args) {
    const Discord = require("discord.js");
    const guild = message.guild;
    const urlSize  = { formart: 'png', size: 2048};
    var msg1 = args[0]
    //const user = mushroom.users.fetch(message.mentions.users.first().id, true, true);
    const user = message.mentions.users.first()
      if(user){
        const embed = new Discord.MessageEmbed()
          .setColor(0x1269DC)
          .setTitle(`${user.tag}`)
          .setDescription(`[Link do Avatar](${user.displayAvatarURL(urlSize)})`)
          .setImage(`${user.displayAvatarURL(urlSize)}`);
          message.channel.send(embed).catch(e => console.log(e));
      }
      else
      if(msg1 === undefined){
        const embed = new Discord.MessageEmbed()
          .setColor(0x1269DC)
          .setTitle(`${message.author.tag}`)
          .setDescription(`[Link do Avatar](${message.author.displayAvatarURL(urlSize)})`)
          .setImage(`${message.author.displayAvatarURL(urlSize)}`);
          message.channel.send(embed).catch(e => console.log(e));
      }
      else
      if(msg1 === "guilda" || msg1 === "server"){
          const embed = new Discord.MessageEmbed()
            .setColor(0x1269DC)
            .setTitle(`${guild.name}`)
            .setDescription(`[Link do Avatar](${guild.iconURL(urlSize)})`)
            .setImage(`${guild.iconURL(urlSize)}`);
            message.channel.send(embed).catch(e => console.log(e));
    }
  }
}
