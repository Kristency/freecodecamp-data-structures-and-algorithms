function telephoneCheck(s) {
	const re1 = /\(/
	const re2 = /\)/

	if (re1.test(s) !== re2.test(s)) {
		return false
	}
	return /^1?\s?\(?[0-9]{3}\)?\s?-?[0-9]{3}\s?-?[0-9]{4}$/.test(s)
}

console.log(telephoneCheck('555 (555) 5555'))
