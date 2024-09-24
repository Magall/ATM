const setBank = () => {

    const bank = new Map()
    bank.set(500, 2)
    bank.set(200, 3)
    bank.set(100, 5)
    bank.set(50, 12)
    bank.set(20, 20)
    bank.set(10, 50)
    bank.set(5, 100)
    bank.set(2, 250)
    bank.set(1, 500)
    bank.set('cash', 5100)
    return bank
}

export { setBank }