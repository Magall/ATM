import { ATM } from "./ATM";

describe('Iteration 1 - withdraw', () => {
    it.each([
        [500, '1 bill of 500. '],
        [1000, '2 bills of 500. '],
        [700, '1 bill of 500. 1 bill of 200. '],
        [750, '1 bill of 500. 1 bill of 200. 1 bill of 50. '],
        [850, '1 bill of 500. 1 bill of 200. 1 bill of 100. 1 bill of 50. '],
        [870, '1 bill of 500. 1 bill of 200. 1 bill of 100. 1 bill of 50. 1 bill of 20. '],
        [880, '1 bill of 500. 1 bill of 200. 1 bill of 100. 1 bill of 50. 1 bill of 20. 1 bill of 10. '],
        [3, '1 coin of 2. 1 coin of 1. ']


    ])('for quantity %p receipt should be %p', (quantity, receipt) => {
        const atm = new ATM()

        const result = atm.withdraw(quantity)

        expect(result).toBe(receipt)
    })
})

describe('Interation 2 - bills deduction', () => {
    it('withdraws should deduct bills and coins', () => {
        const atm = new ATM()
        const result = atm.withdraw(1725)
        const billsAndCoins = atm.getBillAndCoins()

        expect(result).toBe('2 bills of 500. 3 bills of 200. 1 bill of 100. 1 bill of 20. 1 bill of 5. ')
        expect(billsAndCoins).toMatchObject([0, 0, 4, 12, 19, 50, 99, 250, 500])

        const secondReceipt = atm.withdraw(1825)
        const secondBillsAndCoins = atm.getBillAndCoins()

        expect(secondReceipt).toBe('4 bills of 100. 12 bills of 50. 19 bills of 20. 44 bills of 10. 1 bill of 5. ')
        expect(secondBillsAndCoins).toMatchObject([0, 0, 0, 0, 0, 6, 98, 250, 500])

    })

    it('should show error if runs out of money', () => {
        const atm = new ATM()

        const receipt = atm.withdraw(10000)

        expect(receipt).toBe('The ATM machine has not enough money, please go to the nearest atm machine')
    })
})