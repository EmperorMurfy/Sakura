module.export =  (client) => {
  console.log(`✅ ${c.user.tag} is online.`); 
  client.user.setActivity({
    name: 'Frying Pan ASMR',
    type: ActivityType.Streaming,
    url: 'https://www.youtube.com/watch?v=lrbOiYrMSPk',
  });
};
