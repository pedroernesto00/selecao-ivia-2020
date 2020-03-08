import { expect } from 'chai'
import { NumeroFeliz } from '../src/NumerosFelizes.js'

describe ('Felicidade', () => {
    describe("Quando passo o numero 7", () => { //7 é numero feliz
        it("Deve retornar true", () => {
            let nf = new NumeroFeliz();
            expect(nf.felicidade(7)).to.equal(true);
        })
    })

    describe("Quando passo o numero 49", () => { //49 também é feliz
        it("Deve retornar true", () => {
            let nf = new NumeroFeliz();
            expect(nf.felicidade(49)).to.equal(true);
        })
    })

    describe("Quando passo o numero 217", () => { //217 não é numero feliz
        it("Deve retornar false", () => {
            let nf = new NumeroFeliz();
            expect(nf.felicidade(217)).to.equal(false);
        })
    })

    describe("Quando passo o numero 0", () => { //0 também não é feliz
        it("Deve retornar false", () => {
            let nf = new NumeroFeliz();
            expect(nf.felicidade(0)).to.equal(false);
        })
    })

})