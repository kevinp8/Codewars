def solution(string, ending):
    if ending == '':
        return True
    elif ending in string and string[len(string)-1] == ending[-1]:
        return True
    else:
        return False