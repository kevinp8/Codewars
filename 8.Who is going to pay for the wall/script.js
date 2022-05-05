function whoIsPaying(name){
  return name.length<3 ? [name.slice(0)] : [name, name.slice(0,2)]
}