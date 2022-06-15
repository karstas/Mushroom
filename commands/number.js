module.exports = {
  name: 'number',
    execute(mushroom, message, args){
      const got = require('got');
      (async () => {
      try {
        var number = args[0]
        const response = await got('http://numbersapi.com/'+number);
        console.log(response.body);
        message.channel.send(response.body);
      } catch (error) {
          console.log(error.response.body);
      };
      })();
    }
}
