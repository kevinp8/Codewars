def high_and_low(numbers):
    stringnumbers = numbers.split()
    numbers = []
    for i in stringnumbers:
        numbers.append(int(i))
    return str(max(numbers)) + ' ' + str(min(numbers))