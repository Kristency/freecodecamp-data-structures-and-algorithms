def rot13(s):
    decoded = []
    for c in s:
        ascii_code = ord(c)
        if 65 <= ascii_code <= 91:
            ascii_code -= 13
            if ascii_code < 65:
                ascii_code = 91 - (65 - ascii_code)
        decoded.append(chr(ascii_code))
    return "".join(decoded)

print(rot13("SERR PBQR PNZC"))