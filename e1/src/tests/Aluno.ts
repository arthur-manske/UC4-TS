import * as rl from 'readline-sync';
import { Aluno } from '../Aluno';

export function testMenuAluno(): void {
	let aluno = new Aluno(rl.question("Nome do aluno: "), new Array<number>());

	const message = `\
		---------------------- UC4 E1A -------------------------------
		- 0. Sair                                                    -
		- 1. Renomear aluno                                          -
		- 2. Adicionar nota.                                         -
		- 3. Calcular média.                                         -
		- Extras:                                                    -
		-	JSON. Exibe uma representação em JSON da classe      -
		---------------------- UC4 E1A -------------------------------
		> `

	let opt: string;

	console.clear();

	while ((opt = rl.question(message)) != '0') {
		let hold = false;

		switch (opt.toUpperCase()) {
		case '0': return;
		case '1': aluno.nome = rl.question("Novo nome: "); break;
		case '2': aluno.addNota(rl.questionInt("Nota: ")); break;
		case '3':
			hold = true;
			console.log(aluno.calcularMedia()); break;
		case 'JSON':
			hold = true;
			console.log(JSON.stringify(aluno));
		}

		if (hold)
			rl.question("Pressione ENTER para continuar.");

		console.clear();
	}
}
