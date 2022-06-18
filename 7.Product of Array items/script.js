/**
 * Returns product of all numbers in a numeric array.
 * Returns null if param is null or array is empty.
 * @param {Array} values - The array containing the items.
 */
function product(values) {
  return values && values.length>0 ? values.reduce((init, i)=> init*i,1) : null;
}