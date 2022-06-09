function evil(n) {
    return n.toString(2).split('').filter(i=> i == '1').length%2 == 0 ? "It's Evil!" : "It's Odious!"
}