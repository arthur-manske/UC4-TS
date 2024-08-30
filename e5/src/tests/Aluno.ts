import * as rl from 'readline-sync';

import { Aluno } from '../Aluno';

export function testMenuAluno(): void {
	console.clear();

	let options: string =	`\t\t----------- UC4 E5A ---------------\n` +
				`\t\t- 0.  Sair                        -\n` +
				`\t\t- 1.  Exibir matrícula do aluno.  -\n` +
				`\t\t- 2.  Exibir nome do aluno.       -\n` +
				`\t\t- 3.  Exibir nota da prova 1.     -\n` +
				`\t\t- 4.  Exibir nota da prova 2.     -\n` +
				`\t\t- 5.  Exibir nota do trabalho.    -\n` +
				`\t\t- 6.  Exibir média das provas.    -\n` +
				`\t\t- 7.  Exibir média final.         -\n` +
				`\t\t- 8.  Definir matrícula do aluno. -\n` +
				`\t\t- 9.  Definir nome do aluno.      -\n` +
				`\t\t- 10. Definir nota da prova 1.    -\n` +
				`\t\t- 11. Definir nota da prova 2.    -\n` +
				`\t\t- 12. Definir nota do trabalho.   -\n` +
				`\t\t----------- UC4 E5A ---------------\n` +
				`\t\t> `;
	let opt: string;
	let aluno = new Aluno(rl.questionInt("Matrícula do Aluno: "), rl.question("Nome do Aluno: "), 0, 0, 0);

	while ((opt = rl.question(options)) != '0') {
		let hold = false;

		switch (opt) {
		case '1': 
			hold = true;
			console.log(aluno.matricula);
			break;
		case '2':
			hold = true;
			console.log(aluno.nome);
			break;
		case '3':
			hold = true;
			console.log(aluno.notaProva1);
			break;
		case '4':
			hold = true;
			console.log(aluno.notaProva2);
			break;
		case '5':
			hold = true;
			console.log(aluno.notaTrabalho);
			break;
		case '6':
			hold = true;
			console.log(aluno.media());
			break;
		case '7':
			hold = true;
			console.log(aluno.final());
			break;
		case '8': aluno.matricula = rl.questionInt("Novo valor: "); break;
		case '9': aluno.nome = rl.question("Novo valor: "); break;
		case '10': aluno.notaProva1 = rl.questionInt("Novo valor: "); break;
		case '11': aluno.notaProva2 = rl.questionInt("Novo valor: "); break;
		case '12': aluno.notaTrabalho = rl.questionInt("Novo valor: "); break;
		case 'JSON':
			hold = true;
			console.log(JSON.stringify(aluno));
		}

		if (hold)
			rl.question("Pressione ENTER para prosseguir.");

		console.clear();
	}
		
	console.clear();
}
