function scramble(str, arr) {
  let strArr = []
  for (let i=0; i<str.length; i++){
    strArr[arr[i]] = str[i]
  }
  return strArr.join('')
};