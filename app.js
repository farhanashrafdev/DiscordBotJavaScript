const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
 console.log('logged in as ${client.user.tag} !');
});

client.on('message', msg =>{
  if (msg.content.includes("hello")){
      msg.reply(["Hello Baby Gurl.",
      "Are you Lost?",
      "https://www.instagram.com/usman._.h/"
    ])
  }
});

client.on('message', msg =>{
  if (msg.content.includes("no")){
      msg.reply(["Then why are you out of kitchen"])
  }
});

client.on('message', msg =>{
  if (msg.content.includes("No")){
      msg.reply(["Then why are you out of kitchen"])
  }
});

client.on('message', msg =>{
  if (msg.content.includes("Who is Pudding?")){
      msg.reply(["It looks like you're looking for an amazing person",
      "You can look for him at ",
      "https://www.instagram.com/usman._.h/"
    ])
  }
});

client.on('message', msg =>{
    if (msg.content.includes("Who is iceflame?")){
        msg.reply(["Is kanjar say mulakat kayliyay neechay dekhiyay",
        "https://www.instagram.com/mriceflame1/"
      ])
    }
  });


client.on('message', msg =>{
    if(msg.author.bot){return}
    if(msg.content === '.commands'){
        msg.channel.send("I have the following commands : \n .ice \n .mamba \n .aws \n use any :D")

    }
    });
    
client.on('message', msg =>{
    
if(msg.content === '.ice'){
    msg.channel.send("Bhai tu baby gurl kartay kartay marjai ga")
}
});

client.on('message', msg =>{
    
    if(msg.content === '.aws'){
        msg.channel.send("Beta aj rana tay awais nahi bachda. Aj awais nu chuk kay lejana")
    }
    });

client.on('message', msg =>{
    
        if(msg.content === '.fu'){
            msg.channel.send("*ORAY LG GAYE")
        }
        });
client.on('message', msg =>{
    if(msg.content === '.mamba'){
        msg.channel.send("Tauba Tauba Sara Mo..........", "disconnected", " Han mein kahan tha ....OD khrab krdia ")
    }
    });

