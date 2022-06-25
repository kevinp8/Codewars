// This Cube function needs help
// change the constructor so that it can take an integer for the side or no args

function Cube(...n) {
  var side = Math.abs(n[0]) || 0;
  this.getSide = function() {
    return side
  };
  this.setSide = function(n) {
    side = Math.abs(n)
  };
};