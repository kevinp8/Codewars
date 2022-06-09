Array.prototype.numberOfOccurrences = function(num) {
  return this.filter(i => i== num).length
}