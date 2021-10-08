const Discord = require('discord.js');

const client = new Discord.Client({intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]});

const prefix = '!';





client.once('ready', () => {
   console.log('Darren Bot is online'); 
});

client.on ('messageCreate', message =>{
if (!message.content.startsWith(prefix)|| message.author.bot) return;

const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();

if (command ==='ping'){
    message.channel.send('pong!');
 
  
  
  
    
 });







client.login(process.env.BOT_TOKEN);
