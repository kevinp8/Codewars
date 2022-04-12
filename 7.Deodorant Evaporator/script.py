def evaporator(content, evap_per_day, threshold):
    amount = content
    lose = (evap_per_day / 100)
    days = 0
    while amount > threshold/100*content:
        amount -= amount*lose
        days += 1
    return days