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
    ]
  },
  {
    name: 'domain_expansion',
    description: 'nah, id win',
  },
  {
    name: 'guh',
    description: 'truly a guh reaction to a guh moment of all time',
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
