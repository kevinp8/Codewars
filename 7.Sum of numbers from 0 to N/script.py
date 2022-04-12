def show_sequence(n):
    if n==0:
        return '0=0'
    elif n<0:
        return str(n) + '<0'
    else:
        nums =[]
        numsstr = []
        for i in range(n+1):
            nums.append(i)
            numsstr.append(str(i))
        return '+'.join(numsstr) + ' = ' + str(sum(nums))