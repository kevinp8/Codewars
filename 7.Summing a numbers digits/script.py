def sum_digits(number):
    theNum = 0
    sum = 0
    if number < 0:
        theNum = -1*number
    else:
        theNum = number
    for i in str(theNum):
        sum += int(i)
    return sum
        