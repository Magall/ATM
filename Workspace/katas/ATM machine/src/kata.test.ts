import { ATM } from "./kata";

describe('ATM machine Iteration 2', () => {
    it.each([
        [1725, '2 bills of 500.\n3 bills of 200.\n1 bill of 100.\n1 bill of 20.\n1 bill of 5.'],
        [1825, '4 bills of 100.\n12 bills of 50.\n44 bills of 10.\n19 bills of 20.\n1 bill of 5.\n']
    ])('for %p withdraw expect this recipt %p', (quantity, result) => {
        const receipt = ATM(quantity)

        expect(receipt).toMatch(result)
    })
    it('should show error if bank run out cash', () => {
        const receipt = ATM(10000)

        expect(receipt).toBe('The ATM machine has not enough money, please go to the nearest atm machine')
    })

})