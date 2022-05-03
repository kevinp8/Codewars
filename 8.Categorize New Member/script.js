function openOrSenior(data){
  return data.map(pair => {
    if ((pair[0] >= 55) && (pair[1] > 7)) return 'Senior'
    else return 'Open'
  })
}