function aliasGen(a, b){
    if ((/[a-zA-Z]/).test(a[0]) && (/[a-zA-Z]/).test(b[0])) return firstName[a[0].toUpperCase()] + ' ' + surname[b[0].toUpperCase()]
    return 'Your name must start with a letter from A - Z.'
}