import * as rl from 'readline-sync';
import { Car } from './Car';

const garage = new Array<Car>(
	new Car('Landau',      6,  100, 107),
	new Car('Galaxie 500', 5,  100, 100),
	new Car('Chevette',    12, 12,  42),
	new Car('Maverick V8', 7,  24,  65),
	new Car('Opala',       7,  12,  62),
	new Car('Fusca',       12, 12,  40),
	new Car('Corsa',       14, 9,   50),
	new Car('Palio',       13, 4,   48)
);

function printGarage(garage: Array<Car>): void {
	process.stdout.write(`Garagem:`);
	for (let i = 0; i < garage.length; ++i)
		console.log(`\n\t${i + 1} - ${garage[i].getModel()} - Tanque ${garage[i].getGas()}/${garage[i].getMaxGas()} - Eficiência ${garage[i].getKmPerLitter()}`);
}

function chooseCarFromGarage(garage: Array<Car>): Car {
	let i: number = 0;
	printGarage(garage);

	while (i <= 0 || i > garage.length) 
		i = rl.questionInt("Digite a posição do carro: ");
	return garage[i - 1];
}

function main(): void {
	console.clear();

	let options =	`--------- Garagem ----------\n`	+
			`- 0. Sair.                 -\n`	+
			`- 1. Exibir gasolina.      -\n`	+
			`- 2. Exibir garagem.       -\n`	+
			`- 3. Colocar novo carro.   -\n`	+
			`- 4. Remover carro.        -\n`	+
			`- 5. Selecionar carro.     -\n`	+
			`- 6. Percorrer distância   -\n`	+
			`- 7. Colocar mais gasolina -\n`	+
			`> `;

	let opt: string;
	let car = chooseCarFromGarage(garage);	
	
	console.clear();

	while ((opt = rl.question(options)) != '0') {
		let hold = false;
		switch (opt) {
		case '1':
			hold = true;
			console.log(car.getGas());
			break;
		case '2':
			hold = true;
			printGarage(garage);
			break;
		case '3':
			if (garage.length >= 10) {
				hold = true;
				console.log("Remova um carro, a capacidade máxima da garagem já foi atingida (10).");
				break;
			}

			garage[garage.length - 1] = new Car(rl.question("Modelo: "), rl.questionInt("Eficiência (km/L): "), rl.questionInt("Gasolina no tanque: "), rl.questionInt("Capacidade máxima do tanque: "));
			break;
		case '4': {
			let model = rl.question("Modelo do carro: ");
			garage.splice(garage.findIndex((car) => car.getModel() === model), 1);
			break; }
		case '5':	
			car = chooseCarFromGarage(garage);
			break;
		case '6':
			hold = true;
			car.ride(rl.questionInt("Distância (km): "));
			break;
		case '7':
			hold = true;
			car.addGas(rl.questionInt("Gasolina (L): "));
			break;
		case 'JSON':
			hold = true;
			console.log(JSON.stringify(garage));
		}

		if (hold)
			rl.question("Pressione ENTER para continuar.");
		console.clear();
	}

}

main();
