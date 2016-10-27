var Discord = require("discord.io");
var bot = new Discord.Client({
  token: process.env.token,
  autorun: true
});

let lobby = {};

bot.on("ready", function() {
  console.log(`${bot.username} - (${bot.id})`);
});

bot.on("message", function(user, userID, channelID, message, event) {
  console.log( user, message )
  if (
    message.substr(0, 5) == "!comp " || "/comp " && //check to see if it's a comp
    channelID in bot.directMessages && //check to see if the message is a dm
    userID != bot.id //check to see if the message is not sent by the bot
  ) {
    let args = message.substr(6, message.length).split(" ");
    switch (args[0]) {
    
    case "create":
      if (!lobby[userID]) {
        lobby[userID] = {
          "invited": [],
          "members": [userID]
        };
        bot.sendMessage({
          to: channelID,
          message: "successfully created your lobby, to invite people, type: `!comp invite @username`"
        });
      } else {
        bot.sendMessage({
          to: channelID,
          message: "it looks like you've already created a lobby, to invite people to your lobby, type: `!comp invite @username`"
        });
      }
      break;
    
    case "delete":
      if (lobby[userID]) {
        delete lobby[userID];
        bot.sendMessage({
          to: channelID,
          message: "Successfully deleted your lobby, to create a new lobby, type: `!comp create`"
        });
      } else {
        bot.sendMessage({
          to: channelID,
          message: "You don't have a lobby to delete, to create a lobby, type: `!comp create`"
        });
      }
      
      break;
    
    case "invite":
      let inviteId = args[1].substr(2, args[1].length-1);
      console.log(inviteId);
      break;

    case (args[0]=="help"||""):
      bot.sendMessage({
        to: channelID,
        message:
          `Commands:
          \`create\` create a lobby
          \`delete\` delete your lobby
          \`invite\` invite someone to your lobby
          `
      });
      break;
    
    default:
      bot.sendMessage({
        to: channelID,
        message: `\`${message}\` is not a valid command, to list all valid commands, type \`!comp help\``
      });
      break;
    
    }
  }
});

// bot.sendMessage({
//   to: channelID,
//   message: `info: user: ${user}, userID: ${userID}, channelID: ${channelID}, message: ${message}, event: ${event}.`
// })
