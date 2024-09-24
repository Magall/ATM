import { setBank } from "./bank"
import { calcutator } from "./billsCalculator"

const bank = setBank()
// describe('Withdraw', () => {
//     it.only.each([
//         [500, { bills: [500], coins: [] }],
//         [1000, { bills: [500, 500], coins: [] }],
//         [700, { bills: [500, 200], coins: [] }],
//         [800, { bills: [500, 200, 100], coins: [] }],
//         [850, { bills: [500, 200, 100, 50], coins: [] }],
//         [860, { bills: [500, 200, 100, 50, 10], coins: [] }],
//         [870, { bills: [500, 200, 100, 50, 20], coins: [] }],
//         [875, { bills: [500, 200, 100, 50, 20, 5], coins: [] }],
//         [877, { bills: [500, 200, 100, 50, 20, 5], coins: [2] }],
//         [878, { bills: [500, 200, 100, 50, 20, 5], coins: [2, 1] }]




//     ])('%p withdraw should have tokens %p', (witdrawQtd, resp) => {
//         const receipt = calcutator(witdrawQtd, bank)

//         expect(receipt).toMatchObject(resp)
//     })
// })