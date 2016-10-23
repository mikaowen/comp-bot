var Discord = require("discord.io");
var bot = new Discord.Client({
  token: process.env.token,
  autorun: true
});

bot.on("ready", function() {
  console.log(`${bot.username} - (${bot.id})`);
});

bot.on("message", function(user, userID, channelID, message, event) {
  if (
    message.substr(0, 5) == "!comp " || "/comp " &&
    channelID in bot.directMessages &&
    userID != bot.id
  ) {
    let args = message.substr(6, message.length).split(" ");
    switch (args[0]) {
    case "create":
      bot.sendMessage({
        to: channelID,
        message: "successfully created your lobby"
      });
      break;
    case (args[0]=="help"||""):
      bot.sendMessage({
        to: channelID,
        message:
          `Commands:
          create: creates a lobby
          invite: invites someone to your lobby
          `
      });
      break;
    default:
      bot.sendMessage({
        to: channelID,
        message: `${message} is not a valid command, to list all valid commands, type !comp help`
      });
      break;
    }
  }
});

// bot.sendMessage({
//   to: channelID,
//   message: `info: user: ${user}, userID: ${userID}, channelID: ${channelID}, message: ${message}, event: ${event}.`
// })
