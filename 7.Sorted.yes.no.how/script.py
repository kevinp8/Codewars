def is_sorted_and_how(arr):
    cloneAscend = arr[:]
    cloneDescend = arr[:]
    cloneAscend.sort()
    cloneDescend.sort(reverse=True)
    if arr == cloneAscend:
        return 'yes, ascending'
    elif arr == cloneDescend:
        return 'yes, descending'
    else:
        return 'no'