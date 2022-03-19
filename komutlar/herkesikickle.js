module.exports = {
  name:"kick",
  code:`
  $forEachMember[kick]
  $sendDM[$authorID;✅ Tüm üyeler kicklenmeye başlandı!]
  $onlyForIDs[$getVar[whitelist];]
  `
  }
