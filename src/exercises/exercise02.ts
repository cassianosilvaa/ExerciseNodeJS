/**2. Crie uma classe que modele uma bola:
a. Atributos
i. Cor
ii. Circunferência
iii. Material
b. Métodos
i. Trocar Cor
ii. Mostrar cor */

export class Ball {
    color!: string;
    circum!: number;
    material!: string;

    constructor(color: string, circum: number, material: string) {
        this.color = color;
        this.circum = circum;
        this.material = material;
    }

    showColor() {
        console.log(
            `A cor da bola é ${this.color}, a circunferência é de ${this.circum}cm e o material é o ${this.material}!`
        );
    }

    changeColor() {
        this.color = "Vermelha";
        console.log(`A nova cor é ${this.color}`);
    }
}
