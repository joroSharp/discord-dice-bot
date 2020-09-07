const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "/r"

client.once('ready', () => {
    //This function will be executed when the bot starts
    console.log('Ready!');
});

client.on('message', message => {

    //This function will be executed whenever a new message is written in the chat

    if(message.author.bot || message.content.substring(0, 2) != prefix){
        //The bot is constantly reading the chat, so we are going to discard all the messages that it writes and those that do not start with the prefix assigned in the config file.
        return;
    }

    try {
        let replyMessage = "The format of your roll of the dice is not correct";

        //The content format of the message is expected to be somewhat similar to /r 4d5 so we are going to split the meesage content to get the arguments
        const diceArguments = message.content.slice(3).trim().split('d');

        if(diceArguments.length == 2){
            replyMessage = rolldices(diceArguments[0], diceArguments[1]);
        }

        message.reply(replyMessage);

    }
    catch (error) {
        console.log(error);
        message.reply("Whoops! It seems that something has gone wrong.");
    }

});



function rolldices(num, sides){
    num = num == '' ? '1' : num;

    //This is a simple limitation to prevent the bot from crashing
    if(num <= 100 && sides <= 1000)
    {
        let total = 0;

        let reply = "";

        for(i = 0 ; i < num; i++){
            const rollValue = Math.floor(sides * Math.random() + 1); //this will return a integer number between 1 and the sides value
            total += rollValue;
            reply = `${reply} + ${rollValue}`;
        }

        return `(${reply.slice(2)}) = ${total}`;

    }
    else{
        return "Please make an easier roll";
    }
}

// Use predefined environment TOKEN variable
client.login(process.env.DICETOKEN);
