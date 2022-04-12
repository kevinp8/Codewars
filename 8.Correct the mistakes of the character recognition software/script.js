function correct(string)
{
  return string.split('').map(i => {
    if (i == '0') return 'O'
    if (i == '5') return 'S'
    if (i == '1') return 'I'
    else return i
  }).join('')
}