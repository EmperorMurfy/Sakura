// index.js
// written: mason z
// march 17, 2024
// main discord bot files

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

client.on("messageCreate", async(message) => {
  if(message.content.toLowerCase().startsWith("test")) {
    // .toLowercase added
    message.reply({ content: `Hello, ${message.author}!` });
  }
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

// sends embed video
client.on('messageCreate', (message) => { 

 if (message.content === 'blob') { 
  message.reply('https://cdn.discordapp.com/attachments/761237935043379222/1213724022559211600/Snaptik.app_7324518673404661035.mp4?ex=6608f894&is=65f68394&hm=754b4cee5788c327587404238c3f65e9af750b44442a4dd2123f2d3bc467817f&'); // replies
 }

 else if (message.content === '<@1116082537169698816> > <@1218342329589698620>') {
  message.reply('https://tenor.com/view/sukuna-jujutsu-kaisen-sukuna-looking-down-gif-7333648534605432939');
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

  if (interaction.commandName === 'add') {
    const num1 = interaction.options.get('first-number').value;
    const num2 = interaction.options.get('second-number').value;

    interaction.reply(`the sum is ${num1+num2}`);
  }

  if (interaction.commandName === 'domain_expansion') {
    interaction.reply(':rightwards_pushing_hand_tone1: :blue_circle: :red_circle: :leftwards_pushing_hand_tone1: :palm_up_hand_tone1: :dash: :dash: :dash: :purple_circle:');
  }

  if (interaction.commandName === 'guh') {
    interaction.reply('https://tenor.com/view/kenjaku-suguru-geto-surprised-cat-jujutsu-kaisen-gif-14583623906303270638');
  }
})



client.login(process.env.TOKEN); //token
