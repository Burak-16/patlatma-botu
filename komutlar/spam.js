module.exports = {
  name:"spam",
  code:`
  $djsEval[for(var i = 0;i < 100;i++){
message.channel.send("@everyone https://discord.gg/400")
}]
  $onlyForIDs[$getVar[whitelist];]
  `
  }
