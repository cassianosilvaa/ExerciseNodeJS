/**Implemente uma classe chamada Carro com as seguintes
propriedades:
a. Um veículo tem um certo consumo de combustível (medidos
em km / litro) e uma certa quantidade de combustível no
tanque.
b. O consumo é especificado no construtor e o nível de
combustível inicial é 0.
c. Forneça um método andar() que simula o ato de dirigir o
veículo por uma certa distância, reduzindo o nível de
combustível no tanque de gasolina.

d. Forneça um método obterGasolina(), que retorna o nível atual
de combustível e forneça um método adicionarGasolina(),
para abastecer o tanque.

Exemplo: 

meuFusca = new Carro(15)
meuFusca.adicionarGasolina(20)
meuFusca.andar(100)
meuFusca.obterGasolina()
*/

export class Carro {
    consumo: number;
    tanqueComb!: number;

    constructor(consumo: number) {
        this.consumo = consumo;
        this.tanqueComb = 0;
    }

    andar(km: number) {
        let litrosConsumido = km / this.consumo;
        if (litrosConsumido > this.tanqueComb) {
            return console.log("\nVocê não tem combustível suficiente!\n");
        }
        console.log(
            `Você andou ${km}km e gastou aproximadamente ${litrosConsumido.toFixed(
                2
            )} litros de gasolina.`
        );
        console.log(`Seu carro fez uma média de ${km / litrosConsumido}km/L.`);

        this.tanqueComb -= litrosConsumido;
    }
    obterGasolina() {
        return console.log(
            `Nível atual de gasolina: ${this.tanqueComb} Litros.`
        );
    }
    adicionarGasolina(addGasolina: number) {
        this.tanqueComb += addGasolina;
    }
}
