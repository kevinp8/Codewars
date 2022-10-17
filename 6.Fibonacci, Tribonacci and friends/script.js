function Xbonacci(signature,n){
  if (n < signature.length) return signature.slice(0, n)
  else {
    let arr = [...signature]
    for (let i=signature.length; i<n; i++) {
      arr.push(arr.slice(i-signature.length, i).reduce((init, i) => init+i))
    }
    return arr
    }
}