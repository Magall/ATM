
type Money = { value: number, type: 'bill' | 'coin' }

const MONEY = [
    { value: 500, type: 'bill' },
    { value: 200, type: 'bill' },
    { value: 100, type: 'bill' },
    { value: 50, type: 'bill' },
    { value: 20, type: 'bill' },
    { value: 10, type: 'bill' },
    { value: 5, type: 'bill' },
    { value: 2, type: 'coin' },
    { value: 1, type: 'coin' }
]

export class ATM {
    bank = new Map();
    constructor() {
        this.bank.set(500, 2)
        this.bank.set(200, 3)
        this.bank.set(100, 5)
        this.bank.set(50, 12)
        this.bank.set(20, 20)
        this.bank.set(10, 50)
        this.bank.set(5, 100)
        this.bank.set(2, 250)
        this.bank.set(1, 500)
    }

    public getBillsAndCoins(): string[] {
        return Array.from(this.bank.values())
    }

    public withdraw(quantity: number): string {
        return this.getReceipt(quantity)
    }

    private getReceipt(quantity: number): string {
        const cash = this.determineNotesToDispense(quantity)
        if (cash.length === 0) {
            return 'The ATM machine has not enough money, please go to the nearest atm machine'
        }
        let receipt = ''
        MONEY.forEach(money => {
            const currencyAmount = cash.filter(el => el.value === money.value).length
            if (currencyAmount > 0) {
                receipt +=
                    `${currencyAmount} ${money.type === 'coin' ? 'coin' : 'bill'}${currencyAmount > 1 ? 's' : ''} of ${money.value}. `

            }
        })
        return receipt
    }

    private determineNotesToDispense(quantity: number): Money[] {
        let quantityToWitdraw = quantity
        const cash: any = []
        let i = 0
        while (quantityToWitdraw > 0 && i < MONEY.length) {
            if (this.bank.get(1) === 0) return []
            if (quantityToWitdraw >= MONEY[i].value && this.bank.get(MONEY[i].value) > 0) {
                quantityToWitdraw -= MONEY[i].value
                cash.push({ ...MONEY[i] })
                this.bank.set(MONEY[i].value, this.bank.get(MONEY[i].value) - 1)
            }
            else {
                i++
            }
        }
        return cash
    }
}