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
            name: 'gif',
            value: 2,
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
