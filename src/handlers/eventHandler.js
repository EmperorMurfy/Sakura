const path = require ('path');
const getAllFiles = require ('../utils/getAllFiles');

module.export = (client) => {
  const eventFolders = getAllFiles(path.join(__dirname, '..', 'events'), true);

  // console.log(eventFolders); // 5:46

  for (const eventFolder of eventFolders) {
    const eventFiles = getAllFiles(eventFolder);
    eventFiles.sort((a, b) => a > b );
    // console.log(eventFiles); // 6:16

    const eventName = eventFolder.replace(/\\/g, '/').split('/').pop();
    // console.log(eventName); // 7:02

    client.on(eventName, async(args) => {
      for (const eventFile of eventFiles) {
        const eventFunction = require(eventFile);
        await eventFunction(client, args); 
      }
    }); 
  }
};
