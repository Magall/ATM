export function calcutator(quantity: number, bank: Map<any, any>): { bills: number[], coins: number[], error: string } {
    const bills: Array<number> = []
    const coins: Array<number> = []
    let error = ''
    let witdrawQtd = quantity
    while (witdrawQtd > 0) {
        if (witdrawQtd >= 500 && bank.get(500) > 0) {
            bills.push(500)
            witdrawQtd -= 500
            bank.set(500, bank.get(500) - 1)
        }
        else if (witdrawQtd >= 200 && bank.get(200) > 0) {
            bills.push(200)
            witdrawQtd -= 200
            bank.set(200, bank.get(200) - 1)

        }
        else if (witdrawQtd >= 100 && bank.get(100) > 0) {
            bills.push(100)
            witdrawQtd -= 100
            bank.set(100, bank.get(100) - 1)

        }
        else if (witdrawQtd >= 50 && bank.get(50) > 0) {
            bills.push(50)
            witdrawQtd -= 50
            bank.set(50, bank.get(50) - 1)

        }
        else if (witdrawQtd >= 20 && bank.get(20) > 0) {
            bills.push(20)
            witdrawQtd -= 20
            bank.set(20, bank.get(20) - 1)


        }
        else if (witdrawQtd >= 10 && bank.get(10) > 0) {
            bills.push(10)
            witdrawQtd -= 10
            bank.set(10, bank.get(10) - 1)

        }
        else if (witdrawQtd >= 5 && bank.get(5) > 0) {
            bills.push(5)
            witdrawQtd -= 5
            bank.set(5, bank.get(5) - 1)

        }

        else if (witdrawQtd >= 2 && bank.get(2) > 0) {
            coins.push(2)
            witdrawQtd -= 2
            bank.set(2, bank.get(2) - 1)


        }
        else if (witdrawQtd >= 1 && bank.get(1) > 0) {
            coins.push(1)
            witdrawQtd -= 1
            bank.set(1, bank.get(1) - 1)

        }
        else {
            return { bills: [], coins: [], error: 'The ATM machine has not enough money, please go to the nearest atm machine' }
        }


    }
    return { bills, coins, error, }
}