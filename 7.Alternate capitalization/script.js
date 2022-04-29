function capitalize(s){
  return [s.split('').map((i, index) =>index%2==0 ? i.toUpperCase() : i.toLowerCase()).join(''), s.split('').map((i, index) =>index%2==0 ? i.toLowerCase() : i.toUpperCase()).join('')];
};