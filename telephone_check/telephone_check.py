import re

def telephoneCheck(s):
    if s.count('(') != s.count(')'):
        return False
    return bool(re.match(r'^1?\s?\(?[0-9]{3}\)?\s?-?[0-9]{3}\s?-?[0-9]{4}$', s))

print(telephoneCheck("(555 555 5555"))

