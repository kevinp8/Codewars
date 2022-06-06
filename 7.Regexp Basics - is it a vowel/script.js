String.prototype.vowel = function() {
  return this !== '' && this.length < 2 ? /[aeiouAEIOU]/.test(this) : false
};