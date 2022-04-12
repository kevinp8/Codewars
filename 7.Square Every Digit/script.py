def square_digits(num):
    squares = ''
    for i in str(num):
        squares += str(int(i)**2)
    return int(squares)