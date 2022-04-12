function encode(string) {
    let word =''
    for (const i of string) {
      if (i == 'a') {word +='1'}
      else if (i == 'e') {word +='2'}
      else if (i == 'i') {word +='3'}
      else if (i == 'o') {word +='4'}
      else if (i == 'u') {word +='5'}
      else {word +=i}
    }
    return word
  }
  
  function decode(string) {
    let word =''
    for (const i of string) {
      if (i == '1') {word +='a'}
      else if (i == '2') {word +='e'}
      else if (i == '3') {word +='i'}
      else if (i == '4') {word +='o'}
      else if (i == '5') {word +='u'}
      else {word +=i}
    }
    return word
  }