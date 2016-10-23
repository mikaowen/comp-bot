var Discord = require('discord.io');
var bot = new Discord.Client({
    token: process.env.token,
    autorun: true
});
 
bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});

function sendMsg(cID, msg, tts=false) {
  bot.sendMessage({
    to: cID,
    message: msg,
    tts: tts
  });
}

bot.on('message', function(user, uID, cID, msg, event) {
  if (message.substr(0, 4)=="!comp"||"/comp") {
    let args = message.substr(5, message.length).split(" ");
    
  }
});

// bot.sendMessage({
//   to: channelID,
//   message: `info: user: ${user}, userID: ${userID}, channelID: ${channelID}, message: ${message}, event: ${event}.`
// })
