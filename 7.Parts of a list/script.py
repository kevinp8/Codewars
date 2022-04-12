def partlist(arr):
    combo1 = []
    combo2 = []
    ultcombo = []
    for i in range(1, len(arr)):
        combo1.append(arr[0:i])
        combo2.append(arr[i:len(arr)])
    for i in range(len(combo1)):
        ultcombo.append(tuple([' '.join(combo1[i]),' '.join(combo2[i])]))
    return ultcombo