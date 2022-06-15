module.exports = {
  name: 'help',
    execute(mushroom, message, args){
      message.reply('Enviei uma mensagem direta para você.')
      message.author.send('**You were expecting help but**' +
      '\nhttps://i.kym-cdn.com/photos/images/newsfeed/000/754/539/566.gif')
    }
}
