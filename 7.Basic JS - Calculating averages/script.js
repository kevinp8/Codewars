var Calculator = {
 average: function(...args) {
  return  args.length ? args.reduce((init, i) => init + i ,0)/(args.length) : 0
 }
};