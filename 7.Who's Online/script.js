const whosOnline = (friends) => {
  let status = {}
  friends.forEach(i => {
    if (i.status == 'offline') {
      if ('offline' in status) status.offline.push(i.username)
      else status.offline = [i.username]
    }
    else if (i.status == 'online' && i.lastActivity > 10) {
      if ('away' in status) status.away.push(i.username)
      else status.away = [i.username]
    } else {
      if ('online' in status) status.online.push(i.username)
      else status.online = [i.username]
    }
  })
  return status
}