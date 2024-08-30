import * as rl from 'readline-sync';

import { testMenuAluno } from './Aluno';
import { testMenuData  } from './Data';
import { testMenuVoo   } from './Voo';
import { testMenuProva } from './Prova';

export function testMenu(): void {
	let options: string =	`\t\t------------ UC4 E5 ---------------\n` +
				`\t\t- 0. Sair                         -\n` +
				`\t\t- 1. Testes classe Aluno.         -\n` +
				`\t\t- 2. Testes classe Data.          -\n` +
				`\t\t- 3. Testes classe Vôo.           -\n` +
				`\t\t- 4. Testes classe Prova.         -\n` +
				`\t\t------------ UC4 E5 ---------------\n` +
				`\t\t> `;
	let opt: string;
	
	console.clear();

	while ((opt = rl.question(options)) != '0') {
		console.clear();
		
		switch (opt) {
		case '1': testMenuAluno(); break;
		case '2': testMenuData();  break;
		case '3': testMenuVoo();   break;
		case '4': testMenuProva(); break;
		}

		console.clear();
	}
}
