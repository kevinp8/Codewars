String.prototype.digit = function() {
  return this.length === 1 && Number.isInteger(parseInt(this));
};