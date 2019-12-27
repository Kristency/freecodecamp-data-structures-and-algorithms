const accepted_characters = {}

for (let i = 48, _pj_a = 58; i < _pj_a; i += 1) {
	accepted_characters[i] = 1
}
for (let i = 97, _pj_a = 123; i < _pj_a; i += 1) {
	accepted_characters[i] = 1
}

function palindrome(s) {
	let formatted_str, alphanumeric_formatted_str
	formatted_str = s.replace(/ /g, '').toLowerCase()
	alphanumeric_formatted_str = []
	for (let i = 0; i < formatted_str.length; i++) {
		if (accepted_characters[formatted_str.charCodeAt(i)]) {
			alphanumeric_formatted_str.push(formatted_str[i])
		}
	}

	alphanumeric_formatted_str = alphanumeric_formatted_str.join()

	//   counts_map = {}
	//   flag = false

	//   for (let i = 0; i < alphanumeric_formatted_str.length; i++) {
	//     if (counts_map[alphanumeric_formatted_str[i]]) {
	//       counts_map[alphanumeric_formatted_str[i]]++
	//     } else {
	//       counts_map[alphanumeric_formatted_str[i]] = 1
	//     }
	//   }

	//   let counts = Object.values(counts_map)

	//   for (let i = 0; i < counts.length; i++) {
	//     if (counts[i] % 2 !== 0) {
	//       if (flag) {
	//         return false
	//       } else {
	//         flag = true
	//       }
	//     }
	//   }
	//   return true
	// }

	let [start, end] = [0, alphanumeric_formatted_str.length - 1]
	let mid = parseInt((end + 1) / 2)
	while (start <= mid) {
		if (alphanumeric_formatted_str[start] !== alphanumeric_formatted_str[end]) {
			return false
		}
		start += 1
		end -= 1
	}
	return true
}

console.log(palindrome('_rcar'))
