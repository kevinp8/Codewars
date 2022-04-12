function outed(meet, boss){
    let sum = 0
    let people = 0
    for (const i in meet) {
      if (i == boss) {
        sum += meet[i]*2
        people++
      } else {
        sum += meet[i]
        people++
      }
    }
    if (sum/people <=5) {
      return 'Get Out Now!'
    } else {
      return 'Nice Work Champ!'
    }
  }