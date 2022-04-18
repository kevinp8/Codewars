def palindrome(num):
    if isinstance(num, int) and num >=0:
        nums = {}
        for i in str(num):
            if i in nums:
                nums[i] += 1
            else:
                nums[i] = 1
        odds = 0
        for i in nums:
            if nums[i]%2 != 0:
                odds += 1
        if (odds == 1 and len(str(num))>1) or odds == 0:
            return True
        else:
            return False
    else:
        return 'Not valid'