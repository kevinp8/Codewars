function uniTotal (string) {
    return string.split('').reduce((initial, letter, index) => initial + string.charCodeAt(index), 0)
   }