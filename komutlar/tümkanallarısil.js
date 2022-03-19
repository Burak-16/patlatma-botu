module.exports = {
  name:"kanal-sil",
  code:`
  $forEachGuildChannel[kanalsil]
  $sendDM[$authorID;✅ Tüm kanallar silinmeye başlandı!]
  $onlyForIDs[$getVar[whitelist];]
  `
  }
