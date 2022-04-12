def get_sum(a,b):
    difference = a-b if a-b>=0 else -1*(a-b)
    if difference == 1:
        return a+b
    elif difference == 0:
        return a
    else:
        adder = a if a<b else b
        sum = a if a<b else b
        for i in range(difference):
            adder += 1
            sum += adder
        return sum