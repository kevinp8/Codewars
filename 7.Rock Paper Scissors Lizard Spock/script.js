function rpsls(pl1,pl2){
    let win = {
      scissors: ['paper', 'lizard'],
      paper: ['rock', 'spock'],
      rock: ['lizard', 'scissors'],
      lizard: ['spock', 'paper'],
      spock: ['scissors', 'rock'],
    }
     if (pl1==pl2) {return 'Draw!'}
     else if (win[pl1].includes(pl2)) {return 'Player 1 Won!'}
     else {return 'Player 2 Won!'}
   
   }