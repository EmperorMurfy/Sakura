require('dotenv').config();
const {REST, Routes, CommandInteraction} = require('discord.js');

const commands = [
  {
    name: 'hey',
    description: 'Replies with hey!',
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
