var Queue = function() {
  this.items = {}
  this.tail = 0
  this.head = 0
};

Queue.prototype.enqueue = function(item) {
  this.items[this.tail] = item
  this.tail++
};

Queue.prototype.dequeue = function() {
  let item = this.items[this.head]
  delete this.items[this.head]
  this.head++
  return item
};

Queue.prototype.size = function() {
  return Object.keys(this.items).length
};