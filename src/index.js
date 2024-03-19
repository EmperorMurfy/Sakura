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

// profile: custom status
client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online.`); 
  
  client.user.setActivity({
    name: 'Frying Pan ASMR',
    type: ActivityType.Streaming,
    url: 'https://www.youtube.com/watch?v=lrbOiYrMSPk',
  });
});


// message interaction: @ ping sender test
client.on("messageCreate", async(message) => {
  if(message.content.toLowerCase().startsWith("test")) {
    // .toLowercase added
    message.reply({ content: `Hello, ${message.author}!` });
  }
});

// message interaction: botCheck
client.on('messageCreate', (message) => { // messageEvent
  if (message.author.bot) { // checks if the message that it's comparing to is itself via ID
  return;
  }

 if (message.content === 'domain expansion') { // checks message content
  message.reply('with this treasure I summon'); // replies
 }
});

//  message interactions: embed testers
client.on('messageCreate', (message) => { 

 if (message.content === 'blob') { 
  message.reply('https://cdn.discordapp.com/attachments/761237935043379222/1213724022559211600/Snaptik.app_7324518673404661035.mp4?ex=6608f894&is=65f68394&hm=754b4cee5788c327587404238c3f65e9af750b44442a4dd2123f2d3bc467817f&'); // replies
 }

 else if (message.content === '<@OTHERBOTIDHERE> > <@SAKURABOTIDHERE>') {
  message.reply('https://tenor.com/view/sukuna-jujutsu-kaisen-sukuna-looking-down-gif-7333648534605432939');
 }
});

// message interactions: responds to self
client.on('messageCreate', (message) => { // messageEvent

 if (message.content === 'with this treasure I summon') { // checks message content
  message.reply('big raga, the op stoppa'); // replies
 }
});


// message interactions: **execute** note: may break code
client.on("messageCreate", (message) => {    
  if(message.content === ("**execute**") && message.author.id === 'USERIDHERE') {
    message.reply({ content: `${message.author} it will be done m'lord` });
    var gif = ["https://tenor.com/view/jjk-kasumi-miwa-i'm-about-to-get-political-gif-15963965777564318298", "https://tenor.com/view/yuji-itadori-suku-romen-sukuna-ryomen-sukuna-yuji-changing-to-sukuna-gif-10017632583639619047"];
    
  message.reply(gif[Math.floor(Math.random() * 2)]); 
  }
}); 

// slash commands: add, hollow_purple, guh
client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  // console.log(interaction.commandName);

  if (interaction.commandName === 'add') {
    const num1 = interaction.options.get('first-number').value;
    const num2 = interaction.options.get('second-number').value;

    interaction.reply(`the sum is ${num1+num2}`);
  }

  if (interaction.commandName === 'hollow_purple') {
    interaction.reply(':rightwards_pushing_hand_tone1: :blue_circle: :red_circle: :leftwards_pushing_hand_tone1: :palm_up_hand_tone1: :dash: :dash: :dash: :purple_circle:');
  }

  if (interaction.commandName === 'guh') {
    interaction.reply('https://tenor.com/view/kenjaku-suguru-geto-surprised-cat-jujutsu-kaisen-gif-14583623906303270638');
  }
});

// slash commands: domain_expansion
client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'domain_expansion') {
    const character = interaction.options.get('characters').value;
    const enchain = interaction.options.get('enchain').value;

    var gojoSatoru = ["Domain Expansion: Unlimited Void", "領域展開：無量空処", "https://tenor.com/view/gojo-domain-expansion-gif-19197982"];
    var ryomenSukuna = ["Domain Expansion: Malevonant Shrine", "領域展開：伏魔御厨子", "https://tenor.com/view/sukuna-ryomen-sukuna-domain-expansion-ry%C5%8Diki-tenkai-malevolent-shrine-gif-25681325"];
    // add more characters as needed & update register-commands.js acccordingly
    var characterSelect = [ryomenSukuna[enchain], gojoSatoru[enchain]];
    
    interaction.reply(characterSelect[character]);
  }
})

client.login(process.env.TOKEN); //token
