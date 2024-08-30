import * as reader from 'readline-sync';
import { Contador } from '../Contador';

export function menuContador(): void {
	const message = `\
		-------------------- Teste Contador ----------------------
		-                                                        -
		- 0.  Terminar os testes.                                -
		- 1.  Incrementar o contador.                            -
		- 2.  Zerar o contador.                                  -
		- 3.  Exibir o valor do contador.                        -
		- 69. Exibir o contador (JSON).                          -
		-                                                        -
		-------------------- Teste Contador ----------------------
		> `;

	let contador = new Contador();
	let opt: number = 1;

	while (opt != 0) {
		console.clear();

		switch ((opt = Number(reader.question(message)))) {
		case 0: break;
		case 1:
			contador.incrementar();
			break;
		case 2:
			contador.zerar();
			break;
		case 3: 
			console.log(contador.valor());	
			reader.question("Pressione a tecla enter para continuar");
			break;
		case 69:
			console.log(JSON.stringify(contador));
			reader.question("Pressione a tecla enter para continuar");
		}

	}
}
