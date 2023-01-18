function declareWinner(fighter1, fighter2, firstAttacker) {
  let move = fighter1.name === firstAttacker ? 1 : 2
  while(fighter1.health > 0 && fighter2.health > 0){
    if (move === 1){
      fighter2.health = fighter2.health - fighter1.damagePerAttack
      move = 2
      if (fighter2.health < 1) return fighter1.name
    } else{
      fighter1.health = fighter1.health - fighter2.damagePerAttack
      move = 1
      if (fighter1.health < 1) return fighter2.name
    }
  }
  
}