def remove_smallest(numbers):
    arr = numbers.copy()
    if len(numbers) == 0:
        return numbers
    else:
        arr.remove(min(numbers))
        return arr