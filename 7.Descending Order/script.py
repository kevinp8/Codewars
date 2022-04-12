def descending_order(num):
    arr = []
    for i in str(num):
        arr.append(i)
    return int(''.join(sorted(arr, reverse=True)))