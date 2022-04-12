def min_value(digits):
    unique = []
    for i in digits:
        if i not in unique:
            unique.append(i)

    unilen = len(unique)
    times = 0
    minNumber = ''
    while times < unilen :
        minNumber += str(min(unique))
        unique.remove(min(unique))
        times+=1
    return int(minNumber)