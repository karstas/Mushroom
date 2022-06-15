module.exports = {
  name: 'request',
    execute(mushroom, message, args){
      const config = require(__dirname + '/../config.json')
      if (message.author.id === process.env.ownerID){
      var request = require('request');
      request('https://www.melhorcambio.com/dolar-hoje', function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
      });
    }
    }
}
