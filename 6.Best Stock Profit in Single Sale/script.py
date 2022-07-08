def max_profit(prices):
    profit = 0
    min = [prices[0]]
    for i in prices:
        if i < min[-1]:
            min.append(i)
        elif i - min[-1] > profit:
            profit = i-min[-1]
    if min == prices:
        return -1
    else:
        return profit