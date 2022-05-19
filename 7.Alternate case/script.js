function alternateCase(s) {
  return s.split('').map(i => i === i.toLowerCase() ? i.toUpperCase() : i.toLowerCase()).join('');
}
