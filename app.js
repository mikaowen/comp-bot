var Discord = require('discord.io');
var bot = new Discord.Client({
    token: process.env.token,
    autorun: true
});
 
bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});

bot.on('message', function(user, userID, channelID, message, event) {
    switch (message) {
      case "hi bot":
        bot.sendMessage({
            to: channelID,
            message: `hey <@${userID}>, nice to meet you.`
        });
      case "yeet":
        bot.sendMessage({
            to: channelID,
            message: `skrr`
        });
    }
});

// bot.sendMessage({
//   to: channelID,
//   message: `info: user: ${user}, userID: ${userID}, channelID: ${channelID}, message: ${message}, event: ${event}.`
// })