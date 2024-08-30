import * as rl from 'readline-sync';
import { Livro } from '../Livro';

export function testMenuLivro(): void {
	let livro = new Livro(rl.question("Nome do livro: "), rl.question("Autor do Livro: "), rl.questionInt("Ano de publicação do livro: "));

	const message = `\
		---------------------- UC4 E1B -------------------------------
		- 0. Sair                                                    -
		- 1. Definir título.                                         -
		- 2. Definir autor.                                          -
		- 3. Definir ano de lançamento.                              -
		- 4. Obter detalhes.                                         -
		- Extras:                                                    -
		-	JSON. Exibe uma representação em JSON da classe      -
		---------------------- UC4 E1B -------------------------------
		> `

	let opt: string;

	console.clear();

	while ((opt = rl.question(message)) != '0') {
		let hold = false;

		switch (opt.toUpperCase()) {
		case '0': return;
		case '1':
			livro.titulo = rl.question("Novo nome: ");
			break;
		case '2':
			livro.autor = rl.question("Novo autor: ");
			break;
		case '3':
			livro.anoPublicacao = rl.questionInt("Novo ano de lançamento: ");
			break;
		case '4':
			hold = true;
			console.log(livro.obterDetalhes());
			break;
		case 'JSON':
			hold = true;
			console.log(JSON.stringify(livro));
		}

		if (hold)
			rl.question("Pressione ENTER para continuar.");

		console.clear();
	}
}
