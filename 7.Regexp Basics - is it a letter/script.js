String.prototype.isLetter = function() {
  if (this.length === 1) return /[a-zA-Z]/.test(this)
  else return false
}