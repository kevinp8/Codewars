function vowelIndices(word){
    let vowels = []
    word.split('').forEach((char, index) => {
      if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'y' || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U' || char == 'Y') vowels.push(index+1)
    })
    return vowels
  }