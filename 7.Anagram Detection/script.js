// write the function isAnagram
var isAnagram = function(test, original) {
  let test1 = test.toLowerCase().split('').sort()
  let test2 = original.toLowerCase().split('').sort()
  return test1.every((i, index) => i === test2[index]) && test1.length == test2.length
};
