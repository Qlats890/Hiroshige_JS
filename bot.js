const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready",()=>{
    console.log("Sudah siap");
});

client.on("message",(message)=>{
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return; 
    if (message.content.indexOf(config.prefix) !== 0) return;

    if(command==='ping'){
        message.channel.send('Pong');
    }else if(command ==='blah'){
        message.channel.send('Mehh');
    }else if (command === "asl") {
        let [age, sex, location] = args;
        message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
    }else if (command === "kick") {
        let member = message.mentions.members.first();
        let reason = args.slice(1);
        member.kick(reason);
      }
    /*
    switch (command) {
        case "ping" :
          message.channel.send('Pong!');
          break;
        case "blah" :
          message.channel.send('Meh.');
          break;
      }
    */
});

client.login(config.token_bot);