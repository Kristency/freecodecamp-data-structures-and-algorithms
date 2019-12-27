function rot13(s) {
	let ascii_code, decoded
	decoded = []
	for (let i = 0; i < s.length; i += 1) {
		ascii_code = s.charCodeAt(i)
		if (65 <= ascii_code && ascii_code <= 91) {
			ascii_code -= 13
			if (ascii_code < 65) {
				ascii_code = 91 - (65 - ascii_code)
			}
		}
		decoded.push(String.fromCharCode(ascii_code))
	}
	return decoded.join('')
}

console.log(rot13('SERR PBQR PNZC'))
