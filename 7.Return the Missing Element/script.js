function getMissingElement(superImportantArray){
  let theNum
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].forEach(num => !superImportantArray.includes(num) ? theNum = num : null)
  return theNum
}