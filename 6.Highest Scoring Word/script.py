import string
def high(x):
    highscore = 0
    alphabet = string.ascii_lowercase
    word = ''
    for i in x.split():
        score = 0
        for j in i:
            score += alphabet.index(j)+1
        if score > highscore:
            highscore = score
            score = 0
            word = i
    return word
    