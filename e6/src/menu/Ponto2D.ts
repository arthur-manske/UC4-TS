import * as reader from 'readline-sync';
import { Ponto2D } from '../Ponto2D';

export function menuPonto2D(): void {
	const message = `\
		--------------------- Teste Ponto2D ----------------------
		-                                                        -
		- 0.  Terminar os testes.                                -
		- 1.  Exibir eixo o x.                                   -
		- 2.  Exibir eixo o y.                                   -
		- 3.  Definir eixo o x.                                  -
		- 4.  Definir eixo o y.                                  -
		- 5.  Comparar com outro ponto 2D.                       -
		- 6.  Exibir a distância em relação a outro ponto 2D.    -
		- 7.  Clonar o ponto 2D.                                 -
		- 8.  Exibir o ponto 2D (string).                        -
		- 69. Exibir o ponto 2D (JSON).                          -
		-                                                        -
		--------------------- Teste Ponto2D ----------------------
		> `;

	let ponto = new Ponto2D();
	let opt: number = 1;

	while (opt != 0) {
		console.clear();

		switch ((opt = Number(reader.question(message)))) {
		case 0: break;
		case 1: 
			console.log(ponto.x);
			reader.question("Pressione a tecla enter para continuar");
			break;
		case 2: 
			console.log(ponto.y);
			reader.question("Pressione a tecla enter para continuar");
			break;
		case 3:
			ponto.x = reader.questionInt('Valor: ');
			break;
		case 4:
			ponto.y = reader.questionInt('Valor: ');
			break;
		case 5: {
			let other = new Ponto2D(reader.questionInt('x: '), reader.questionInt('y: '));
			console.log(ponto.equals(other));
			reader.question("Pressione a tecla enter para continuar");
			break;
		}
		case 6: {
			let other = new Ponto2D(reader.questionInt('x: '), reader.questionInt('y: '));
			console.log(ponto.distancia(other));
			reader.question("Pressione a tecla enter para continuar");
			break;
		}
		case 7: {
			let cloned = ponto.clone();
			console.log(cloned.toString());
			reader.question("Pressione a tecla enter para continuar");
			break;
		}
		case 8:
			console.log(ponto.toString());
			reader.question("Pressione a tecla enter para continuar");
			break;
		case 69:
			console.log(JSON.stringify(ponto));
			reader.question("Pressione a tecla enter para continuar");
		}
	}
}
