
import { calcutator } from "./billsCalculator"
const possibleBills = [500, 200, 100, 50, 10, 20, 5]
const possibleCoins = [2, 1]
import { setBank } from "./bank"

const bank = setBank()
export function ATM(quantity: number): string {
    let resp = ''
    const { bills, coins, error } = calcutator(quantity, bank)
    if (error !== '') {
        return error
    }
    possibleBills.forEach(possibleBill => {
        const possibleBillQtd = bills.filter(bill => bill === possibleBill).length
        if (possibleBillQtd > 1) {
            resp += `${possibleBillQtd} bills of ${possibleBill}.\n`

        }
        else if (possibleBillQtd > 0) {
            resp += `${possibleBillQtd} bill of ${possibleBill}.\n`
        }
    })

    possibleCoins.forEach(possibleCoin => {
        const possibleCoinQtd = coins.filter(coin => coin === possibleCoin).length
        if (possibleCoinQtd > 1) {
            resp += `${possibleCoinQtd} coins of ${possibleCoin}.\n`

        }
        else if (possibleCoinQtd > 0) {
            resp += `${possibleCoinQtd} coin of ${possibleCoin}.\n`
        }
    })

    return resp
}