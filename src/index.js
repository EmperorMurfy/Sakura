// index.js
// written: mason z
// april 7, 2024
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

 else if (message.content === '<@[Enter user ID here]> > <[Enter bot user ID here>') {
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
  if(message.content === ("**execute**") && message.author.id === 'Enter user ID here') { // msg interaction will only run to a specific person, won't run for anyone else
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


// slash commands: nah_i'd win
// pings a user based on another users request and sends it - attempt to figure out how to make that an option perhaps?
client.on('interactionCreate', async(interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'nah_id_win') {
    const targetUserId = interaction.options.get('target-user').value;

    
    interaction.reply(`<@${targetUserId}> "that guy" is **you** <3 https://tenor.com/view/jujutsu-kaisen-jjk-gojo-gojo-satoru-hollow-purple-gif-7633544439289522140` );
    
  }
});

// slash commands: domain_expansion
client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'domain_expansion') {
    const character = interaction.options.get('characters').value;
    const enchain = interaction.options.get('enchain').value;
    
    var gojoSatoru = ["Domain Expansion: Unlimited Void", "**領域展開：無量空処**", "Ryōiki tenkai: Muryō sora sho", "https://tenor.com/view/gojo-domain-expansion-gif-19197982"];
    var ryomenSukuna = ["Domain Expansion: Malevonant Shrine", "**領域展開：伏魔御厨子**", "Ryōiki tenkai: Fukuma Mizushi", "https://tenor.com/view/sukuna-domain-expansion-malevolent-shrine-malevolent-kitchen-gif-8066472834498465617"];
    var jogo = ["Domain Expansion: Coffin of the Iron Mountain", "**領域展開：蓋棺鉄囲山**", "Ryōiki tenkai: Gaikan Tecchisen", "https://tenor.com/view/domain-expansion-jogo-jjk-jogo-coffin-of-the-iron-mountain-gif-20803081"]
    // add more characters as needed & update register-commands.js acccordingly
    var characterSelect = [ryomenSukuna[enchain], gojoSatoru[enchain], jogo[enchain]];
    
    interaction.reply(characterSelect[character]);
  }
});

// slash commands: stand_proud | note: randomizer CHOICE not working, so was noted out, was not deleted as of yet, made mandatory
client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'stand_proud') {

   // if(interaction.options.get('choice').value === 0) {
   //    choice1 = Math.floor(Math.random()*5)
   //  }

   // else{
   //    choice1 = interaction.options.get('choice').value;
   // }
   // const choice = choice1
    var standProud = ["https://tenor.com/view/jogoat-gif-11996953865648686576", 
    "https://tenor.com/view/jogo-jjk-jujutsu-kaisen-jogoat-sukuna-gif-8018799219841835694",
     "https://tenor.com/view/sukuna-you're-strong-sukuna-jogo-strong-sukuna-be-proud-sukuna-won-gif-18267921484872102678",
      "https://cdn.discordapp.com/attachments/1145500209896505426/1219829498275430410/755.png?ex=660cb9bf&is=65fa44bf&hm=5edf070661730fca06cde39f5546fe0fc87da9ef64fdb41e64c8dc79ff56db0f&", 
      "https://cdn.discordapp.com/attachments/1145500209896505426/1219829824034705518/i-have-a-theory-about-sukuna-and-yuji-v0-vxbc3aie2p1c1.png?ex=660cba0d&is=65fa450d&hm=ff2bd1d53a5914ca8eb5713217fb5036ede99c9e8ff12c4612a8aca60b12cc7e&",
    "https://tenor.com/view/jujutsu-kaisen-cursed-clash-cursed-clash-jujutsu-kaisen-jogo-domain-expansion-gif-11520184108911516879"];
    interaction.reply(standProud[Math.floor(Math.random()*6)]); // +1 whenever you add a gif or link above ^
    // console.log(Math.floor(Math.random()*5)); random number between 0 - 5 or 5 values 
    
  }
});


// quadratic formula, will round answers to the nearest thousandth client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if(interaction.commandName == 'quadratic_formula') {
    const a = interaction.options.get('number-a').value;
    const b = interaction.options.get('number-b').value;
    const c = interaction.options.get('number-c').value;

    let discriminant = b * b - 4 * a *c;
    let root1, root2;

    if (discriminant > 0) {
      root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      interaction.reply(`But would you lose? Nah, I'd x =  ${root1} and ${root2}`);
  } else if (discriminant === 0) {
      root1 = root2 = -b / (2 * a);
      interaction.reply(`But would you lose? Nah, I'd x =  ${root1} and ${root2}`);
  } else {
      let realPart = (-b / (2 * a)).toFixed(2);
      let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
      interaction.reply(`But would you lose? Nah, I'd x = ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
  }
  }
});


client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if(interaction.commandName == 'chapter_summon') {
    const num = interaction.options.get('chapter-num').value;

    interaction.reply('**Fandom: ** https://jujutsu-kaisen.fandom.com/wiki/Chapter_' + num + '   **Manga: **[PUT YOUR JJK MANGA LINK HERE, REMOVE CHAPTER NUMBER]' + num + "/" );
  }
});

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName == 'embed_test') {
    const embed = new EmbedBuilder()
    .setTitle('Embed Title')
    .setDescription('this is a test');

    interaction.reply({ embeds: [embed] });
}
});

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'power_of') {
    const base = interaction.options.get('base').value;
    const exponentString = interaction.options.get('exponent').value.toString(); // Ensure exponent is a string

    let exponent;
    try {
      exponent = parseInt(exponentString); // Attempt to parse exponent as an integer
    } catch (error) {
      // Handle invalid exponent input (e.g., non-numeric characters)
      interaction.reply('Invalid exponent. Please enter a valid number.');
      return;
    }

    let result;
    if (exponent < 0) {
      exponent = Math.abs(exponent); // Handle negative exponents
      result = `${base} to the power of -${exponent} or ${base} ⁻${superscript(exponent)} is 1/(${powerOf(base, exponent)}))`;
    } else {
      result = `${base} to the power of ${exponent} or ${base}${superscript(exponent)} is ${powerOf(base, exponent)} `;
    }

    interaction.reply(result);
  }
});

function powerOf(base, exponent) {
  return Math.pow(base, exponent);
}

function superscript(n) {
  // This array stores superscript characters for digits 0-9
  const superscriptChars = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];
  let sb = '';
  for (const c of n.toString()) {
    sb += superscriptChars[parseInt(c)];
  }
  return sb;
}


client.login(process.env.TOKEN); //token
