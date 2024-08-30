import * as reader from 'readline-sync';

import { menuContador       } from './Contador'
import { menuPonto2D        } from './Ponto2D'
import { menuNumeroComplexo } from './NumeroComplexo'

enum TipoDeFuncionario {
	Gerente = 0,
	Caixista
};

let exemplo = TipoDeFuncionario.Gerente;

export function menuIndex(): void {
	const message = `\
		-------------------- UC4 08-14-2024 ----------------------
		-                                                        -
		- 0. Terminar testes.                                    -
		- 1. Inicia os testes do Contador.                       -
		- 2. Inicia os testes do Ponto2D.                        -
		- 3. Inicia os testes do NumeroComplexo.                 -
		-                                                        -
		------------- Escolha uma das opções acima ---------------
		> `;
	
	let opt: number = 1;

	while (opt != 0) {
		console.clear();

		switch ((opt = Number(reader.question(message)))) {
		case 0: return;
		case 1:
			menuContador();
			break;
		case 2:
			menuPonto2D();
			break;
		case 3:
			menuNumeroComplexo();
		}
	}

	console.clear();
}
