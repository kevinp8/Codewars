function dative(word) {
    const front = ['e', 'é','i', 'í', 'ö', 'ő', 'ü', 'ű']
    const back = ['a', 'á', 'o', 'ó', 'u', 'ú']
    for (let i=word.length; i>=0; i--){
      if(front.includes(word[i])) return word+'nek'
      if(back.includes(word[i])) return word+'nak'
    }
}