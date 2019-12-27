const symbol_map = {
	1: 'I',
	5: 'V',
	10: 'X',
	50: 'L',
	100: 'C',
	500: 'D',
	1000: 'M'
}

function convertToRoman(num) {
	let factor, parts, roman_digit, roman_numeral
	parts = []
	while (num > 0) {
		parts.push(num % 10)
		num = parseInt(num / 10)
	}

	roman_numeral = []
	for (let i = 0; i < parts.length; i += 1) {
		factor = Math.pow(10, i)
		if (parts[i] === 1) {
			roman_digit = symbol_map[factor]
		} else if (parts[i] <= 3) {
			roman_digit = symbol_map[factor].repeat(parts[i])
		} else if (parts[i] < 5) {
			roman_digit = symbol_map[factor] + symbol_map[5 * factor]
		} else if (parts[i] === 5) {
			roman_digit = symbol_map[5 * factor]
		} else if (5 < parts[i] && parts[i] <= 8) {
			roman_digit = symbol_map[5 * factor] + symbol_map[factor].repeat(parts[i] - 5)
		} else if (parts[i] === 9) {
			roman_digit = symbol_map[factor] + symbol_map[factor * 10]
		}

		roman_numeral.push(roman_digit)
	}

	roman_numeral.reverse()
	return roman_numeral.join('')
}

console.log(convertToRoman(1000))
