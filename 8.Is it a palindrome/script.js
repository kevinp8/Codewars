function isPalindrome(x) {
    let a = x.toLowerCase().split('')
    let b = x.toLowerCase().split('').reverse()
    for (let i=0; i<a.length; i++) {
      if (a[i] != b[i]) {
        return false
      }
    }
    return true
  }