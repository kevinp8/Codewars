def unique_in_order(iterable):
    arr = []
    if len(iterable) == 1:
        arr.append(iterable[0])
    else:
        for i in range(len(iterable)):
            if iterable.count(iterable[i]) == len(iterable):
                arr.append(iterable[i])
                break
            elif i == len(iterable)-1:
                if len(arr) >=1:
                    if iterable[i] != arr[len(arr)-1]:
                        arr.append(iterable[i])
            elif iterable[i] != iterable[i+1]:
                arr.append(iterable[i])
    return arr