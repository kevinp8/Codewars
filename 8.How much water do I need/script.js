function howMuchWater(water, load, clothes){
  if (clothes > 2*load) return 'Too much clothes'
  else if (clothes < load) return 'Not enough clothes'
  else {
    return Number((water * 1.1**(clothes - load)).toFixed(2))
  }
}