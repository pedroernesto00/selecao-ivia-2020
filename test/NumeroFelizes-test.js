import { expect }  from 'chai'
import { NumeroFeliz } from '../src/NumerosFelizes.js'

describe ('Felicidade', () => {
    describe("Quando passo o numero 7", () => {
        it("Deve retornar true", () => {
            let nf = new NumeroFeliz();
            expect(nf.felicidade(7)).to.equal(true);
        })
    })
})