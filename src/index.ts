import { Cont } from "./exercises/exercise01";
import { Ball } from "./exercises/exercise02";
import { Wallet } from "./exercises/exercise03";
import { Calculator } from "./exercises/exercise04";
import {
    BombaCombustivel,
    TipoCombustivel,
    ValorCombustivel,
} from "./exercises/exercise05";
import { Carro } from "./exercises/exercise06";
console.log("\n///////////////////////////////////////////////\n");

console.log("===== Exercício 01 =====");

let cont = new Cont(0);

cont.increment();
cont.increment();
cont.increment();
cont.reset();
cont.returnNumber();

console.log("\n///////////////////////////////////////////////\n");

console.log("===== Exercício 02 =====");

let ball = new Ball("Azul", 69.5, "Couro sintético");

ball.showColor();
ball.changeColor();

console.log("\n///////////////////////////////////////////////\n");

console.log("===== Exercpicio 03  =====\n");

const id = new Date().valueOf();

let accBank = new Wallet(id, "Cassiano Silva", 0);
console.log(accBank);

accBank.changeName("Vera Lucia");
console.log(accBank);

accBank.deposit(10);

console.log(accBank);

accBank.whitdraw(11);

console.log(accBank);

accBank.whitdraw(5);

console.log(accBank);

console.log("\n///////////////////////////////////////////////\n");

console.log("===== Exercício 04 =====");

const calcs = new Calculator();

calcs.calcAdd(10);
calcs.calcSub(5);
calcs.calcMul(2);
calcs.calcDiv(8);
calcs.calcAdd(5);
calcs.seeHistoric();

console.log("\n///////////////////////////////////////////////\n");

console.log("===== Exercício 05 =====\n");

const postoCombustivel = new BombaCombustivel(
    TipoCombustivel.Gnv,
    ValorCombustivel.Gasolina,
    50
);

// console.log(postoCombustivel);
// postoCombustivel.abastecerPorValor(30);
// console.log(postoCombustivel);
// postoCombustivel.abastecerPorLitro(55);
// console.log(postoCombustivel);
// postoCombustivel.alterarValor(5);
// console.log(postoCombustivel);
// postoCombustivel.alterarCombustivel(TipoCombustivel.Gnv, ValorCombustivel.Gnv);
// console.log(postoCombustivel);
// postoCombustivel.alterarQuantidadeCombustivel(150);
// console.log(postoCombustivel);

console.log(postoCombustivel);
postoCombustivel.abastecerPorLitro(
    100,
    TipoCombustivel.Gnv,
    ValorCombustivel.Gnv
);
console.log(postoCombustivel);
postoCombustivel.abastecerPorValor(30);
console.log(postoCombustivel);

console.log("\n///////////////////////////////////////////////\n");

console.log("===== Exercício 06 =====\n");

const carro = new Carro(14);
carro.adicionarGasolina(20);
carro.andar(30);
carro.obterGasolina();
