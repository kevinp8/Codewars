function parseF(s) {
  return (/[0-9]/).test(s) ? parseFloat(s) : null;
}