def to_nato(words):
    arr = []
    for i in words:
        if i == ' ':
            pass
        elif i == '.' or i == '?' or i == '!' or i == ',':
            arr.append(i)
        else:
            arr.append(NATO[i.upper()])
    return ' '.join(arr)