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
});

// bot.sendMessage({
//   to: channelID,
//   message: `info: user: ${user}, userID: ${userID}, channelID: ${channelID}, message: ${message}, event: ${event}.`
// })
