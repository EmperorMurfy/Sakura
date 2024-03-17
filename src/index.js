// index.js
// written: mason z
// march 17, 2024
// main discord bot files

// requires node.js to run + visualcode studios (is the platform used to run) 
// enter 'nodemon' to run in terminal
// enter keyboard command: control + c 
// to exit into main terminal
require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    // 10:13
  ]
})

client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online.`); 
  
  client.user.setActivity({
    name: 'Frying Pan ASMR',
    type: ActivityType.Streaming,
    url: 'https://www.youtube.com/watch?v=lrbOiYrMSPk',
  });
});



// message event tests
client.on('messageCreate', (message) => { // messageEvent
  if (message.author.bot) { // checks if the message that it's comparing to is itself via ID
  return;
  }

 if (message.content === 'domain expansion') { // checks message content
  message.reply('with this treasure I summon'); // replies
 }
});

// doesn't check for user id
client.on('messageCreate', (message) => { // messageEvent


 if (message.content === 'with this treasure I summon') { // checks message content
  message.reply('big raga, the op stoppa'); // replies
 }
});

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  // console.log(interaction.commandName);

  if (interaction.commandName === 'hey') {
    interaction.reply('hey');
  }
})



client.login(process.env.TOKEN); //token
