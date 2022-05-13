function nearestSq(n){
    let high = Math.ceil(Math.sqrt(n)) ** 2
    let low = Math.floor(Math.sqrt(n)) ** 2
    return (high-n) > (n-low) ? low : high
}