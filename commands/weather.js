module.exports = {
  name: 'weather',
  execute(mushroom, message, args){
    const Discord = require("discord.js");
    let pesquisa = args
    let weather = require('weather-js2');
    weather.find({search: pesquisa, degreeType: 'C', resCount: 1}, function(err, result) {
    if(err) return message.reply('Ocorreu um erro!'); console.log(err);
    console.log(JSON.stringify(result, null, 2));
    if(result.lenght == null ) return message.reply('Cidade não encontrada!');
    let feels;
    console.log(result[0].current.feelslike);
    if(result[0].current.feelslike>=40) feels = "💀";
    else if(result[0].current.feelslike>=30) feels = "🥵";
    else if(result[0].current.feelslike>=21) feels = "😐";
    else if(result[0].current.feelslike<=20) feels = "🥶";
    const embed = new Discord.MessageEmbed()
      .setColor(0x1269DC)
      .setTitle(result[0].location.name)
      .setThumbnail(result[0].current.imageUrl)
      .addField("Céu",result[0].forecast[1].skytextday)
      .addField("Temperatura :thermometer:",`**Atual** : ${result[0].current.temperature} °C \n**Mínima** : ${result[0].forecast[1].low} °C \n**Máxima** : ${result[0].forecast[1].high}°C`,true)
      .addField("Velocidade do vento :dash:",result[0].current.windspeed,true)
      .addField("Umidade :droplet:",`${result[0].current.humidity} %`,true)
      .addField(`sensação térmica ${feels}`,`${result[0].current.feelslike} °C`,true)
      .addField("Tempo de observação :face_with_monocle:",result[0].current.observationtime,true)
      .setFooter("© weather.service.msn.com")
    message.channel.send({ embeds: [embed] });
    //message.channel.send(embed).catch(e => console.log(e));
    });
  }
}
