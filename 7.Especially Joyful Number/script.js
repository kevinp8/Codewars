function numberJoy(n) {
    let s = n.toString().split('').reduce((init, i) => init + Number(i),0)
    let sRev = Number(s.toString().split('').reverse().join(''))
    return s * sRev === n
}