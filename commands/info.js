module.exports = {
  name: 'info',
    execute(mushroom, message, args){
      const Discord = require("discord.js");
      //const guild = message.guild;
      const guild = new Discord.Guild(mushroom);
      const embed = new Discord.MessageEmbed()
        .setTitle(`${guild.name}`)
        .setThumbnail(`${guild.iconURL}`)
        .addField("ID",`${guild.id}`,true)
        .addField("Dono",`${guild.owner}`,true)
        .addField("Mushroom se juntou em",`${guild.joinedAt}`)
        .addField("Criado em",`${guild.createdAt}`,true)
        .addField("Usuários",`${guild.memberCount}`,true)
        .addField("Canais",`${guild.channels.array().length}`,true)
        .addField("Cargos",`${guild.roles.array().length}`,true)
        .addField("Emotes",`${guild.emojis.array().length}`,true)
        .addField("Região",`${guild.region}`,true)
        .setColor(0x1269DC)
        .setTimestamp()
        .setFooter("© Tet")
        message.channel.send(embed)
    }
}
