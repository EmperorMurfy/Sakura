
client.on("messageCreate", async(message) => {

  if (message.author.bot) { // checks if the message that it's comparing to is itself via ID
    return;
    }
    
  if(message.content === ("**execute**") && message.author.id === '762428111337422870') {
    message.reply({ content: `${message.author} it will be done m'lord` });
    var gif = ["https://tenor.com/view/jjk-kasumi-miwa-i'm-about-to-get-political-gif-15963965777564318298", "https://tenor.com/view/yuji-itadori-suku-romen-sukuna-ryomen-sukuna-yuji-changing-to-sukuna-gif-10017632583639619047"];
    
  message.reply(gif[1]); //Math.floor(Math.random() * 2)
  }
}); 
