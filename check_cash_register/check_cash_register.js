const currency_map = {
	0.01: 'PENNY',
	0.05: 'NICKEL',
	0.1: 'DIME',
	0.25: 'QUARTER',
	1: 'ONE',
	5: 'FIVE',
	10: 'TEN',
	20: 'TWENTY',
	100: 'ONE HUNDRED'
}

const cash_register = {}

function fill_cash_register(cid) {
	for (let [currency, amount] of cid) {
		cash_register[currency] = amount
	}
}

function calculate_change_due(due_amt, cid) {
	let cash_register_copy, change, difference, i, currency_arr, sorted_currency, total_cash_available

	total_cash_available = Object.values(cash_register).reduce((a, b) => a + b, 0)

	if (total_cash_available < due_amt) {
		return { status: 'INSUFFICIENT_FUNDS', change: [] }
	} else {
		if (total_cash_available === due_amt) {
			return { status: 'CLOSED', change: cid }
		} else {
			/* using Greedy approach which works with denominations of most countries like US, India etc.
                In this, we always select the largest possible denomination available.
                If the denominations are arbitrary, greedy won't work, and have to use Dynamic Programming. */

			currency_arr = [...Object.keys(currency_map)]
			sorted_currency = currency_arr.sort((a, b) => b - a)
			i = 0
			cash_register_copy = { ...cash_register }
			while (due_amt > 0) {
				if (due_amt >= sorted_currency[i] && cash_register_copy[currency_map[sorted_currency[i]]] > 0) {
					due_amt = parseFloat((due_amt - sorted_currency[i]).toFixed(2))
					cash_register_copy[currency_map[sorted_currency[i]]] = parseFloat(
						(cash_register_copy[currency_map[sorted_currency[i]]] - sorted_currency[i]).toFixed(2)
					)
					i = 0
				} else {
					if (i < sorted_currency.length) {
						i += 1
					} else {
						return { status: 'INSUFFICIENT_FUNDS', change: [] }
					}
				}
			}

			change = []
			for (let currency of sorted_currency) {
				difference = parseFloat(
					(cash_register[currency_map[currency]] - cash_register_copy[currency_map[currency]]).toFixed(2)
				)

				if (difference > 0) {
					change.push([currency_map[currency], difference])
				}
			}

			return { status: 'OPEN', change }
		}
	}
}

function checkCashRegister(price, cash, cid) {
	let due, due_rounded

	// Filling the cash drawer
	fill_cash_register(cid)

	// Calculating the due amount
	due = cash - price
	due_rounded = parseFloat(due.toFixed(2))

	return calculate_change_due(due_rounded, cid)
}

console.log(
	checkCashRegister(19.5, 20, [
		['PENNY', 0.01],
		['NICKEL', 0],
		['DIME', 0],
		['QUARTER', 0],
		['ONE', 1],
		['FIVE', 0],
		['TEN', 0],
		['TWENTY', 0],
		['ONE HUNDRED', 0]
	])
)
