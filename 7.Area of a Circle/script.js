var circleArea = function(radius) {
  return typeof radius == 'number'  && radius > 0 ? Number((Math.PI * radius * radius).toFixed(2)) : false
};