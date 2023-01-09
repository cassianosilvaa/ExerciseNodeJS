/**Crie uma classe para representar uma Calculadora. Esta classe
deve conter um atributo que servirá para armazenar o histórico das
operações e seus respectivos resultados.
a. Esta classe deve conter as operações de somar, multiplicar,
dividir e diminuir.
b. Esta classe deve iniciar com o histórico vazio
c. Esta classe deve conter uma ação para visualizar o histórico. */

export class Calculator {
    historic: string[];
    resultCalc: number;

    constructor() {
        this.historic = [];
        this.resultCalc = 0;
    }

    calcAdd(a: number) {
        const lastCalc = this.resultCalc;
        const result = ` Soma: ${a} + ${lastCalc} = ${a + lastCalc}`;
        this.historic.push(result);
        this.resultCalc = a + lastCalc;
    }
    calcSub(a: number) {
        const lastCalc = this.resultCalc;
        const result = ` Subtração: ${lastCalc} - ${a} = ${lastCalc - a}`;
        this.historic.push(result);
        this.resultCalc = lastCalc - a;
    }
    calcMul(a: number) {
        const lastCalc = this.resultCalc;
        const result = ` Multiplicação: ${lastCalc} x ${a} = ${lastCalc * a} `;
        this.historic.push(result);
        this.resultCalc = lastCalc * a;
    }
    calcDiv(a: number) {
        const lastCalc = this.resultCalc;
        const result = ` Divisão: ${lastCalc} / ${a} = ${lastCalc / a}`;
        this.historic.push(result);
        this.resultCalc = lastCalc / a;
    }
    seeHistoric() {
        console.log(`\nHistórico da calculadora: ${this.historic}`);
    }
}
