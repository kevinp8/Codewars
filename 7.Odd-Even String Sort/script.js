function sortMyString(S) {
    let evens = S.split('').filter((i, index) => index%2 == 0).join('')
    let odds = S.split('').filter((i, index) => index%2 != 0).join('')
    return evens + ' ' +odds;
}