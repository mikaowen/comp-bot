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
        sendMsg(cID, `Nobody knows who Mojo is`);
        break;
      case "we dem boys":
        sendMsg(cID, `holla holla`);
        break;
    }
    
    //The 'say' command
    if (msg.substr(1, 3) === "say" && (msg[0] == "!" || msg[0] == "/") && msg.length > 4) {
      if (msg[4] != " ") {
        msg = msg.substr(0, 4) + " " + msg.substr(4, msg.length);
      }
      sendMsg(cID, `/tts ${msg.substr(5, msg.length)}`);
    }
});

// bot.sendMessage({
//   to: channelID,
//   message: `info: user: ${user}, userID: ${userID}, channelID: ${channelID}, message: ${message}, event: ${event}.`
// })
