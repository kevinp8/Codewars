import re
def string_clean(s):
    return ''.join(re.findall('["\'\\\,.`~;:<>/?!@#$%^&*()+a-zA-Z ]', s))