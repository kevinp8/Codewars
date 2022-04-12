def duplicate_encode(word):
    curve = ''
    for i in word.lower():
        if word.lower().count(i) > 1:
            curve += ')'
        else:
            curve +='('
    return curve