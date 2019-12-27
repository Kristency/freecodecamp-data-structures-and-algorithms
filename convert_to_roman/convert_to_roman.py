symbol_map = {
    1:'I',
    5:'V',
    10:'X',
    50:'L',
    100:'C',
    500:'D',
    1000:'M'
}

def convertToRoman(num):
    parts = []
    while num > 0:
        parts.append(num%10)
        num //= 10

    roman_numeral = []
    for i in range(len(parts)):
        factor = 10**i
        if parts[i] == 1:
            roman_digit = symbol_map[factor]
        elif parts[i] <= 3:
            roman_digit = symbol_map[factor]*parts[i]
        elif parts[i] < 5:
            roman_digit = symbol_map[factor] + symbol_map[5*factor]
        elif parts[i] == 5:
            roman_digit = symbol_map[5*factor]
        elif 5 < parts[i] <= 8:
            roman_digit = symbol_map[5*factor] + symbol_map[factor]*(parts[i] - 5)
        elif parts[i] == 9:
            roman_digit = symbol_map[factor] + symbol_map[factor*10]

        roman_numeral.append(roman_digit)

    roman_numeral.reverse()
    return "".join(roman_numeral)

print(convertToRoman(1984))