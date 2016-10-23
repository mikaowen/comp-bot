var Discord = require('discord.io');
var bot = new Discord.Client({
    token: process.env.token,
    autorun: true
});
 
bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});

function sendMsg(cID, msg) {
  bot.sendMessage({
    to: cID,
    message: msg
  });
}

bot.on('message', function(user, uID, cID, msg, event) {
    //msg switch statement
    switch (msg.toLowerCase()) {
      case "hi bot":
        sendMsg(cID, `hey <@${uID}>, nice to meet you`)
        break;
      case "yeet":
        sendMsg(cID, `skrr`);
        break;
      case "who is mojo?":
        sendMsg(cID, `idk?`);
        break;
      case "we dem boys":
        sendMsg(cID, `holla holla`);
        break;
    }
    
    //The 'say' command
    if (message.substr(1, 4) === "say" && (message[0] == "!" || message[1] == "/") && message.length > 5) {
      if (message[4] != " ") {
        message = message.substr(0, 4) + " " + message.substr(4, message.length);
      }
      bot.sendMessage({
        to: channelID,
        message: `/tts ${message.substr(5, message.length)}`
      });
    }
});

// bot.sendMessage({
//   to: channelID,
//   message: `info: user: ${user}, userID: ${userID}, channelID: ${channelID}, message: ${message}, event: ${event}.`
// })
