function isIntArray(arr) {
    let masterBool = true
    if (arr == null || Array.isArray(arr) == false) {return false}
    else if (arr.length == 0) {return true}
    else {
      for (const i of arr) {
        if (Number.isInteger(i) == false) {
          masterBool = false
        }
      }
    return masterBool;}
  }