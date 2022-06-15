module.exports = {
  name: 'ping',
  execute(mushroom, message, args) {
    message.channel.send("Pongo").then(msg =>{
        msg.edit(`Pongo\nO meu ping é ${msg.createdTimestamp-message.createdTimestamp}ms.`).catch(e => console.log(e));});
  }
}
