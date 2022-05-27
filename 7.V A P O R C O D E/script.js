function vaporcode(string) {
  return string.split(' ').join('').split('').map(i => i.toUpperCase()).join('  ')
}