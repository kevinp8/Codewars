function printerError(s) {
    return s.split('').reduce((init, char) => char>'m' ? init+1 : init,0) + `/${s.length}`
}