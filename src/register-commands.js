// try: node src/register-command.js 
// when logging new added commands
require('dotenv').config();
const {REST, Routes, CommandInteraction, ApplicationCommandOptionType} = require('discord.js');

const commands = [
  {
    name: 'add',
    description: 'Adds two numbers.',
    options: [
      {
        name: 'first-number',
        description: 'The first number.',
        type: ApplicationCommandOptionType.Number,
        choices: [
          {
            name: 'one',
            value: 1,
          },
          { 
            name: 'two',
            value: 2,
          },
          {
            name: 'three',
            value: 3,
          },
        ],
        required: true,
      },
      {
        name: 'second-number',
        description: 'The second number.',
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
    ],
  },
  {
    name: 'quadratic_formula',
    description: 'you kinda strugglin at math to use this cuh, but sure. cursed technique: a²+bx+c=0!',
    options: [
      {
        name: 'number-a',
        description: 'number a in quadratic formula',
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
      {
        name: 'number-b',
        description: 'number b in quadratic formula', 
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
      {
        name: 'number-c',
        description: 'number c in quadratic formula',
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
    ],
  },
  {
    name: 'chapter_summon',
    description: 'with this treasure I summon, jjk chapter',
    options: [
      {
      name: 'chapter-num',
      description: 'chapter number',
      type: ApplicationCommandOptionType.Number,
      required: true,
      },
    ],
  },
  {
    name: 'embed_test',
    description: 'embed test, please do not use, coding practice',
  },
  {
    name: 'nah_id_win',
    description: '🗿🤫',
    options: [
      {
        name: 'target-user',
        description: 'target user',
        type: ApplicationCommandOptionType.Mentionable,
        required: true,
      },
    ],
  },
  {
    name: 'power_of',
    description: 'stand ashamed, you are bad at math',
    options: [
      {
        name: 'base',
        description: 'number to the powerOf _',
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
      {
        name: 'exponent',
        description: 'number that is the power',
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
    ],
  },
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
          {
            name: 'Jogo',
            value: 2,
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
            name: 'txt-rmj',
            value: 2,
          },
          {
            name: 'gif',
            value: 3,
          },
        ],
        required: true,
      }
    ]

  },
  {
    name: 'hollow_purple',
    description: 'apple logo be like',
  },
  {
    name: 'guh',
    description: 'truly a guh reaction to a guh moment of all time',
  },
  {
    name: 'stand_proud',
    description: 'stand proud, you cooked 🔥',
    // options: [{
    //  name: 'choice',
    //  description: 'enter a number 1-5',
    //  type: ApplicationCommandOptionType.Number,
    //  choices: [
    //    {
     //     name: 'randomizer',
     //     value: 0,
     //   },
     // ],
     // required: true,
   // }] // randomizer code - implementation "working"  but same random num? plus not whole num
  },
];

const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);
(async() => {
  try {
    console.log('Registering slash commands...');

    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands }
    )

    console.log('Slash command were registered sucessfully!')
  } catch (error){
    console.log(`There was an error: ${error}`); 
  }
})();
