def divisors(n):
    divisors = []
    for i in range(1, n+1):
        if n%i == 0:
            divisors.append(i)
    return len(divisors)