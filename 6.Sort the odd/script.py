def sort_array(source_array):
    indexArr = []
    oddsArr = []
    newArr = source_array[:]
    for i in range(len(source_array)):
        if source_array[i]%2 != 0:
            indexArr.append(i)
            oddsArr.append(source_array[i])
    oddsArr.sort()
    for i in range(len(indexArr)):
        newArr[indexArr[i]] = oddsArr[i]
    return newArr