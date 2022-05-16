function correctPolishLetters (string) {
  return string.split('').map(i => {
    if (i === 'ą') return 'a'
    else if (i === 'ć') return 'c'
    else if (i === 'ę') return 'e'
    else if (i === 'ł') return 'l'
    else if (i === 'ń') return 'n'
    else if (i === 'ó') return 'o'
    else if (i === 'ś') return 's'
    else if (i === 'ź') return 'z'
    else if (i === 'ż') return 'z'
    else return i
  }).join('')
}
