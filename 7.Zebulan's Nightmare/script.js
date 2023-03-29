function zebulansNightmare(functionName) {
  return functionName.split('_').reduce((init, i, index) => index == 0 ? i : init + i[0].toUpperCase() + i.slice(1),'')
}
