/**Faça um programa completo utilizando classes e métodos que:
a. Possua uma classe chamada BombaCombustivel, com no
mínimo esses atributos:
i. tipoCombustivel.

ii. valorLitro

iii. quantidadeCombustivel

b. Possua no mínimo esses métodos:
i. abastecerPorValor() – método onde é informado o
valor a ser abastecido e mostra a quantidade de litros
que foi colocada no veículo

ii. abastecerPorLitro() – método onde é informado a
quantidade em litros de combustível e mostra o valor a
ser pago pelo cliente.

iii. alterarValor() – altera o valor do litro do combustível.

iv. alterarCombustivel() – altera o tipo do combustível.

v. alterarQuantidadeCombustivel() – altera a
quantidade de combustível restante na bomba.

OBS: Sempre que acontecer um abastecimento é necessário
atualizar a quantidade de combustível total na bomba. Não deve ser
possível abastecer se não tiver gasolina suficiente na bomba. */

export enum TipoCombustivel {
    Gasolina = "gasolina",
    Diesel = "diesel",
    Gnv = "gnv",
}

export enum ValorCombustivel {
    Gasolina = 5,
    Diesel = 3,
    Gnv = 2,
}

export class BombaCombustivel {
    tipoCombustivel: TipoCombustivel;
    valorLitro: ValorCombustivel;
    quantidadeCombustivel: number;

    constructor(
        tipoCombustivel: TipoCombustivel,
        valorLitro: ValorCombustivel,
        quantidadeCombustivel: number
    ) {
        (this.tipoCombustivel = tipoCombustivel),
            (this.valorLitro = valorLitro),
            (this.quantidadeCombustivel = quantidadeCombustivel);
    }

    abastecerPorValor(value: number) {
        const abastValor = value / this.valorLitro;
        if (value < 1) {
            return console.log("\nSaldo insuficiente!\n");
        }
        if (this.quantidadeCombustivel < 0) {
            return console.log("Estamos sem combustível! ");
        }
        if (abastValor > this.quantidadeCombustivel) {
            return console.log("Estamos sem combustível! ");
        }
        this.quantidadeCombustivel -= abastValor;
        console.log(`\nVeículo abastecido com ${abastValor} litros!\n`);
    }

    abastecerPorLitro(
        value: number,
        tipo: TipoCombustivel,
        valorComb: ValorCombustivel
    ) {
        if (this.valorLitro != valorComb) {
            return console.log("\nCombustível na bomba errada!\n");
        }
        if (this.tipoCombustivel != tipo) {
            return console.log("\nCombustível na bomba errada!\n");
        }
        if (this.quantidadeCombustivel < value) {
            return console.log("\nNão tem combustível suficiente na bomba!\n");
        }
        if (value < 1) {
            return console.log("\nOpção inválida!\n");
        }
        const abastLitro = value * this.valorLitro;
        console.log(`\nO cliente precisa pagar R$${abastLitro} reais!\n`);
        this.quantidadeCombustivel -= value;
    }

    alterarValor(value: number) {
        if (value < 1) {
            console.log("\nOpção inválida!\n");
            return;
        }
        this.valorLitro = value;
    }

    alterarCombustivel(tipoComb: TipoCombustivel, valorComb: ValorCombustivel) {
        this.tipoCombustivel = tipoComb;
        this.valorLitro = valorComb;
    }

    alterarQuantidadeCombustivel(qtdComb: number) {
        if (qtdComb < 0) {
            console.log("\nErro de valor!\n");
            return;
        }
        this.quantidadeCombustivel = qtdComb;
    }
}
