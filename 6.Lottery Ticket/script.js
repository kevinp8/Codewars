function bingo(ticket, win){
  return ticket.reduce((init, i) => i[0].includes(String.fromCharCode(i[1])) ? init + 1: init, 0) >= win ? 'Winner!' : 'Loser!'
}