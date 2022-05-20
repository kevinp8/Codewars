function lowercaseCount(str){
    return str.split('').filter(char => (/[a-z]/).test(char)).length
}