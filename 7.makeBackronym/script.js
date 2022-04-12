var makeBackronym = function(string){
    let words = []
    string.split('').forEach(i => words.push(dict[i.toUpperCase()]))
    return words.join(' ');
  };