# Discord Dice Bot

This project is about a simple bot for Discord that allows you to simulate dice rolls, very useful if you want to carry out online games of D&D and other rpgs. It's also ideal as a starting point for Discord bot development with discord.js, so feel free to tweak and improve it to your liking.

## PREREQUISITES

You must have installed on your computer

- [Node.js v12 or higher](https://nodejs.org/en/)
- A code editor (I recommend [Visual Studio Code](https://code.visualstudio.com/))
- A registered Discord bot. You can create a Discord App from the [Discord developers portal](https://discord.com/developers/applications)

_Note: In case of any problem or doubt, I recommend checking the official [discord.js documentation](https://discordjs.guide/)_

## CONFIGURE THE PROJECT

### 1. Add your bot in a Discord channel

After registering a new app on the Discord developer portal, it is assigned a Client ID which you can find in the General Information of your app (for example, 981081844001717752). Replace CLIENT_ID with your actual Client ID and open the link to add your bot to a channel (this requires you to have sufficient permission on that channel).

    https://discord.com/oauth2/authorize?client_id={CLIENT_ID}&scope=bot

### 2. Generate token

Generate a token for your registered app from the Discord developers portal. Open the config.json file and replace the value of token with your token:
    {
        "prefix": "/r",
        "token": "{your_token_here}"
    }

### 3. Run the app

Open a terminal, navigate to the root of the project and run the command:

    node index.js
The application starts running and a message will appear saying "Ready!" in your terminal. This is a sign that your bot is working properly.

### 4. Test your bot on Discord

from the channel where you have added your bot run the command:
    /r 4d100
The bot should respond with a roll of 4 dice with values from 1 to 100.

## SYNTAX

In order for the bot to respond to your messages, you must start them using the "/r" prefix. You can change this prefix from the config.json file.

To simulate a roll you must write a message with a format similar to this:
    /r 4d100
The first number (4) represents the number of dice to be rolled. The second number (100) represents the number of faces that each die will have. Therefore our bot will return a message with 4 random numbers from 1 to 100.

## NOTES

All the code for the project is in the index.js file. Although the code is simple, I have added several comments to simplify your understanding in case you do not have much experience with javascript.

This repository is a very simplified version of another bot that includes more complex functions to simulate dice rolls and make more complex calculations for various RPGs. My intention with this repository is to provide a gateway to bot development for Discord, if you are interested in that other more complex bot please contact me.
