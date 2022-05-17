var Ghost = function() {
  let color = Math.ceil(Math.random() * 4)
  if (color == 1) this.color = 'white'
  if (color == 2) this.color = 'yellow'
  if (color == 3) this.color = 'purple'
  if (color == 4) this.color = 'red'
};
