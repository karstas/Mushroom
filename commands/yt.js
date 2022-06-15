module.exports = {
  name: 'yt',
  execute(mushroom, message, args) {
    const config = require(__dirname + '/../config.json')
    var search = require('youtube-search');
    args = args.join(' ');
    const procura = args
    var opts = {
      maxResults: 1,
      key: process.env.ytkey,
      regionCode: 'BR',
      type: 'video'
    };
    search(procura, opts, function(err, results) {
      if(err) return console.log(err);
      console.dir(results);
      message.channel.send(results[0].link);
      console.dir(args)
    });
  }
}
