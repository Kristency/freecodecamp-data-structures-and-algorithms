currency_map = {
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

cash_register = {}


def fill_cash_register(cid):
    for currency, amount in cid:
        cash_register[currency] = amount


def calculate_change_due(due_amt, cid):
    total_cash_available = sum(cash_register.values())

    if total_cash_available < due_amt:
        return {'status': 'INSUFFICIENT_FUNDS', 'change': []}
    elif total_cash_available == due_amt:
        return {'status': 'CLOSED', 'change': cid}
    else:
        ''' using Greedy approach which works with denominations of most countries like US, India etc.
                In this, we always select the largest possible denomination available.
                If the denominations are arbitrary, greedy won't work, and have to use Dynamic Programming. '''

        sorted_currency = sorted(currency_map.keys(), reverse=True)
        i = 0
        cash_register_copy = cash_register.copy()
        while due_amt > 0:
            if due_amt >= sorted_currency[i] and cash_register_copy[currency_map[sorted_currency[i]]] > 0:
                due_amt = round(due_amt - sorted_currency[i], 2)
                cash_register_copy[currency_map[sorted_currency[i]]
                                   ] = round(cash_register_copy[currency_map[sorted_currency[i]]] - sorted_currency[i], 2)
                i = 0
            else:
                if i < len(sorted_currency)-1:
                    i += 1
                else:
                    return {'status': 'INSUFFICIENT_FUNDS', 'change': []}

        change = []
        for currency in sorted_currency:
            difference = round(cash_register[currency_map[currency]
                                             ] - cash_register_copy[currency_map[currency]], 2)
            if difference > 0:
                change.append((currency_map[currency], difference))

        return {'status': 'OPEN', 'change': change}


def checkCashRegister(price, cash, cid):
    # Filling the cash drawer
    fill_cash_register(cid)

    # Calculating the due amount
    due = cash - price
    due_rounded = round(due, 2)

    return calculate_change_due(due_rounded, cid)


print(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], [
      "QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
