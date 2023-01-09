/*Crie uma classe Contador, que encapsule um valor usado para
contagem de itens ou eventos. A classe deve oferecer métodos que
devem:
a) Zerar;
b) Incrementar;
c) Retornar o valor do contador.*/

export class Cont {
    cont: number;

    constructor(cont: number) {
        this.cont = cont;
    }

    reset() {
        this.cont = 0;
        console.log(`Número zerado: ${this.cont}`);
    }

    increment() {
        this.cont++;
        console.log(`Número atual: ${this.cont}`);
    }

    returnNumber() {
        while (this.cont < 3) {
            this.cont++;
        }
        console.log(`Valor retornado: ${this.cont}`);
    }
}
