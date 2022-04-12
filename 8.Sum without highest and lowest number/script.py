def sum_array(arr):
    if arr == None or arr == []:
        return 0
    else:
        maxnum = max(arr)
        minnum = min(arr)
        mincount = 0
        maxcount = 0
        sum = 0
        for i in arr:
            if i == maxnum and maxcount == 0:
                maxcount += 1
            elif i == minnum and mincount == 0:
                mincount += 1
            else:
                sum += i
        return sum
        