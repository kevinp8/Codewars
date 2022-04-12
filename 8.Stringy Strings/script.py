def stringy(size):
    word = ''
    while len(word)<size:
        word += '1'
        if len(word)==size:
            break
        else:
            word += '0'
    return word