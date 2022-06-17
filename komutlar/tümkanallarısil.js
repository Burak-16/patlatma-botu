module.exports = {
  name:"kanal-sil",
  code:`
  $forEachGuildChannel[burakvurdu]
  $sendDM[$authorID;✅ Tüm kanallar silinmeye başlandı!]
  $onlyForIDs[$getVar[whitelist];]
  `
  }
