require("dotenv").config();

// Creates the Client class
const {
    Client
} = require("discord.js");

// Creates a new object of Client and logs into discord with the token
const bot = new Client();
bot.login(process.env.botToken);


console.log("Bot is logged in");