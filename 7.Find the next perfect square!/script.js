function findNextSquare(sq) {
  return Math.sqrt(sq) == Math.floor(Math.sqrt(sq)) ? (Math.sqrt(sq)+1)**2 : -1;
}