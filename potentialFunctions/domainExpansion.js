// user can input a command of '/domain_expansion'
// this will allow users to input either 'roll' which randomly picks a number OR 'Gojo Satoru' OR 'Ryomen Sukuna' and so on - character
// then the user can select either - 'txt-eng' OR 'txt-jpn' OR 'gif' - Chant 
// which will send said image or text line


// the idea is that 'roll','Gojo Satoru','Ryomen Sukuna' is all assigned a number value, such as 0, 1, 2
// this calls an arraylist of character objects 
// this class stores the 'txt-eng' 'txt-jpn' or 'gif'
// txt-eng, txt-jpn, or gif is selected with Chant, which is also assigned a 0, 1, 2 value

// Example:

// /domain_expansion character: Gojo Satoru chant: gif
// obtains value 1 + value 2
// sends value 1 to array (characters[1].get(2)), with value 2 inputted into the object i.e class
// bot then sends gif

// IMPLEMENTATION COMPLETED Mar 18, 2024 4:23 PM EST ~ 40 minutes time 

// register-commands.js 

 {
    name: 'domain_expansion',
    description: 'nah, i alone am the honored one',
    options: [
      {
        name: 'characters',
        description: 'select the jujutsu kaisen character.',
        type: ApplicationCommandOptionType.Number,
        choices: [
          {
            name: 'Ryomen_Sukuna',
            value: 0,
          },
          {
            name: 'Gojo_Satoru',
            value: 1,
          },
        ],
        required: true,
      },
      { 
        name: 'enchain',
        description: 'select the technique.',
        type: ApplicationCommandOptionType.Number,
        choices: [
          {
            name: 'txt-eng',
            value: 0,
          },
          {
            name: 'txt-jpn',
            value: 1,
          },
          {
            name: 'gif',
            value: 2,
          },
        ],
        required: true,
      }
    ]

  },

// index.js 

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'domain_expansion') {
    const character = interaction.options.get('characters').value;
    const enchain = interaction.options.get('enchain').value;

    var gojoSatoru = ["Domain Expansion: Unlimited Void", "領域展開：無量空処", "https://tenor.com/view/gojo-domain-expansion-gif-19197982"];
    var ryomenSukuna = ["Domain Expansion: Malevonant Shrine", "領域展開：伏魔御厨子", "https://tenor.com/view/sukuna-ryomen-sukuna-domain-expansion-ry%C5%8Diki-tenkai-malevolent-shrine-gif-25681325"];

    var characterSelect = [ryomenSukuna[enchain], gojoSatoru[enchain]];
    
    interaction.reply(characterSelect[character]);
  }
})
