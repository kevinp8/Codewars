let dict = {
  'G': 'A',
  'g': 'a',
  'A': 'G',
  'a': 'g',
  'D': 'E',
  'd': 'e',
  'E': 'D',
  'e': 'd',
  'R': 'Y',
  'r': 'y',
  'Y': 'R',
  'y': 'r',
  'P': 'O',
  'p': 'o',
  'O': 'P',
  'o': 'p',
  'L': 'U',
  'l': 'u',
  'U': 'L',
  'u': 'l',
  'K': 'I',
  'k': 'i',
  'I': 'K',
  'i': 'k'
}

function encode(str) 
{
    return str.split('').reduce((init, i) => init + (dict[i] || i),'');   
}

function decode(str) 
{
    return str.split('').reduce((init, i) => init + (dict[i] || i),'');  
}