def spin_words(sentence):
    arr = sentence.split(' ')
    newarr = []
    for i in arr:
        if len(i)>4:
            newarr.append(i[::-1])
        else:
            newarr.append(i)
    return ' '.join(newarr)