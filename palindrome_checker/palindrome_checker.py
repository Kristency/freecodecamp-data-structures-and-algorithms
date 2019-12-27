accepted_characters = {}

for i in range(48, 58):
    accepted_characters[i] = 1

for i in range(97, 123):
    accepted_characters[i] = 1


def palindrome(s):
    formatted_str = s.replace(" ", "").lower()
    alphanumeric_formatted_str = []
    for ch in formatted_str:
        if ord(ch) in accepted_characters:
            alphanumeric_formatted_str.append(ch)

    alphanumeric_formatted_str = "".join(alphanumeric_formatted_str)

    # counts_map = Counter(alphanumeric_formatted_str)
    # flag = False
    # for v in counts_map.values():
    #     if v % 2 != 0:
    #         if flag:
    #             return False
    #         else:
    #             flag = True

    # return True

    start, end = 0, len(alphanumeric_formatted_str) - 1
    mid = (end+1)//2
    while start <= mid:
        if alphanumeric_formatted_str[start] != alphanumeric_formatted_str[end]:
            return False
        start += 1
        end -= 1
    return True

print(palindrome("_racar"))
