function solve(s){
    let up = 0
    let low = 0
    s.split('').forEach(i => i == i.toUpperCase() ? up++ : low++)
    return up>low ? s.toUpperCase() : s.toLowerCase()
}