var Discord = require('discord.io');
var bot = new Discord.Client({
    token: process.env.token,
    autorun: true
});
 
bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});

bot.on('message', function(user, userID, channelID, message, event) {
    switch (message.toLowerCase()) {
      case "hi bot":
        bot.sendMessage({
            to: channelID,
            message: `hey <@${userID}>, nice to meet you.`
        });
        break;
      case "yeet":
        bot.sendMessage({
            to: channelID,
            message: `skrr`
        });
        break;
      case "who is mojo?":
        bot.sendMessage({
          to: channelID,
          message: `Nobody knows who Mojo is.`
        });
        break;
    }
});

// bot.sendMessage({
//   to: channelID,
//   message: `info: user: ${user}, userID: ${userID}, channelID: ${channelID}, message: ${message}, event: ${event}.`
// })
