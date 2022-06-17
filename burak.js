const burak = require("aoi.js")
var fs = require('fs')
const bot = new burak.Bot({
    token: process.env.token,//.env dosyasında token yazan variablenin değerine tokeninizi yazın
    prefix:"$getServerVar[prefix]"//ayarlamalı prefix 
})
bot.onJoined()
bot.onLeave()
bot.onMessage()
var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"))
for(const file of reader) {    
    const command = require(`./komutlar/${file}`)
    bot.command({
        name: command.name,
        code: command.code
    })
}

////////// Status \\\\\\\\\\
bot.status({
text:"Burak",
type:"PLAYING",
status:"dnd",
time: 12 
})

////////// Variables \\\\\\\\\\
bot.variables({
whitelist:"592416134926696448", //Botun komutlarını kullanabilicek ve bottan etkilenmiycek kişilerin idlerini koyun
prefix:"."
})

////////// Commands \\\\\\\\\\
bot.awaitedCommand({
  name:"ban",
  code:`
  $ban[$authorID;ParzivaL saldırı botu altyapısı]
  $onlyIf[$checkContains[$toLowercase[$authorID];$getVar[whitelist]]==false;]
  $suppressErrors
  `
  })

bot.awaitedCommand({
  name:"kick",
  code:`
  $kick[$authorID]
  $onlyIf[$checkContains[$toLowercase[$authorID];$getVar[whitelist]]==false;]
  $suppressErrors
  `
  })

bot.awaitedCommand({
  name:"kanalsil",
  code:`
  $createChannel[burak saldırı botu;text]
  $deleteChannels[$channelID]
  `
  })

bot.channelCreateCommand({
  channel:"burakvurdu",
  code:`
  $channelSendMessage[$newChannel[id];@everyone https://discord.gg/codeshare]
  `
  })
bot.onChannelCreate()

bot.command({

name:"dmduyur",

code:`

$forEachMember[burak]

`

})

bot.awaitedCommand({

name:"burak",

code:`

$sendDM[$authorID; $message]

$suppressErrors

`

}) 
