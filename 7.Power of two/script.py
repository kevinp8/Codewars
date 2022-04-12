def power_of_two(x):
    power = 1
    while power < x:
        power *=2
    return power==x
    