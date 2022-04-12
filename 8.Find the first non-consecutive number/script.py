def first_non_consecutive(arr):
    if len(arr) <=  1:
        return None
    lastValue = arr[0]
    for i in arr:
        if i == lastValue+1 or i ==arr[0]:
            lastValue = i
        else:
            return i
    return None