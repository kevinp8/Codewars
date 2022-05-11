function grabDoll(dolls){
  var bag=[];
  //coding here
  for (let doll of dolls) {
    if (bag.length === 3) break
    else {
      if (doll === 'Hello Kitty' || doll === 'Barbie doll') bag.push(doll)
      else continue
    }
  }
  return bag;
}