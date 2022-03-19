module.exports = {
  name:"ban",
  code:`
  $forEachMember[ban]
  $sendDM[$authorID;✅ Tüm üyeler banlanmaya başlandı!]
  $onlyForIDs[$getVar[whitelist];]
  `
  }
