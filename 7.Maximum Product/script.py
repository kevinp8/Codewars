def adjacent_element_product(array):
    nums = []
    for i in range(len(array)):
        if array[i] == array[-1]:
            continue
        else:
            nums.append(array[i]*array[i+1])
    return max(nums)