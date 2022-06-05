function queueTime(customers, n) {
  let queues = {}
  for (let i=1; i<=n; i++) {
    queues[i] = 0
  }
  for (let time of customers) {
    let lines = Object.keys(queues)
    let times = lines.map(i => queues[i])
    queues[lines[times.indexOf(Math.min(...times))]] += time
  }
  return Math.max(...Object.keys(queues).map(i => queues[i]))
}