/**3. Crie uma classe para implementar uma conta corrente. A classe
deve possuir os seguintes atributos:
a. Número da conta
b. Nome do correntista
c. Saldo
Os métodos são os seguintes:
a) Alterar nome
b) Deposito
c) Saque
No construtor, o saldo é opcional, com valor padrão zero e os
demais atributos são obrigatórios. A conta não pode ficar com saldo
negativo. */

export class Wallet {
    numberAcc: number;
    nameAcc: string;
    balance: number = 0;

    constructor(numberAcc: number, nameAcc: string, balance: number) {
        this.numberAcc = numberAcc;
        this.nameAcc = nameAcc;
        this.balance = balance;
    }

    changeName(newName: string): void {
        console.log("Nome alterado com sucesso!");

        this.nameAcc = newName;
    }
    deposit(makeDeposit: number): void {
        console.log("\nDepósito efetuado com sucesso!");

        this.balance += makeDeposit;
    }
    whitdraw(makeWithdraw: number): void {
        if (makeWithdraw > this.balance) {
            console.log(
                "\nSeu saldo não pode ficar negavito, tente novamente!\n"
            );
            return;
        } else {
            console.log("\nSaque efetuado com sucesso!");

            this.balance -= makeWithdraw;
        }
    }
}
