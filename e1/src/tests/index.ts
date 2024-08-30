import * as rl from 'readline-sync';

import { testMenuAluno  } from './Aluno';
import { testMenuLivro  } from './Livro';
import { testMenuPessoa } from './Pessoa';

export function testMenu(): void {
	const message = `\
		----------------------- UC4 E1 -------------------------------
		- 0. Sair                                                    -
		- 1. Menu aluno.                                             -
		- 2. Menu livro.                                             -
		- 3. Pessoa livro.                                           -
		----------------------- UC4 E1 -------------------------------
		> `

	let opt: string;

	console.clear();
	
	while ((opt = rl.question(message)) != '0') {
		switch (opt) {
		case '1': testMenuAluno(); break;
		case '2': testMenuLivro(); break;
		case '3': testMenuPessoa();
		}

		console.clear();
	}
}
