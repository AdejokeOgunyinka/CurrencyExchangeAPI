const ratesConverter = require('../controllers/converter')

describe('', ()=>{
    test('', async () => {
        const result = await ratesConverter('https://api.exchangeratesapi.io/latest')
        expect(result).toBeInstanceOf(Object)
    });
    test('', async () => {
        const result = await ratesConverter('https://api.exchangeratesapi.io/latest/base=EUK&currency=USD,FIN,LOK')
        expect(result).toBeInstanceOf(Error)
    });
})
