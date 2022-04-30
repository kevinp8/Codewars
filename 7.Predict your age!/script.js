function predictAge(...args){
  return Math.floor(Math.sqrt(args.reduce((init, age) => init + age*age, 0))/2)
}