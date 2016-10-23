var Discord = require('discord.io');
var bot = new Discord.Client({
    token: process.env.token,
    autorun: true
});
 
bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});
 
bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "hi bot") {
        bot.sendMessage({
            to: channelID,
            message: `hey <@${userID}>, nice to meet you.`
        });
        
        bot.sendMessage({
          to: channelID,
          message: `info: user: ${user}, userID: ${userID}, channelID: ${channelID}, message: ${message}, event: ${event}.`
        })
    }
});