function findScreenHeight(width, ratio) {
    let height = width * Number(ratio.split(':')[1]) / Number(ratio.split(':')[0])
    return `${width}x${height}`
}