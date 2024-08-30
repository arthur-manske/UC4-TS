import * as rl from 'readline-sync';

import { Gabarito, Prova } from '../Prova';
import { Data            } from '../Data';

function registrarGabarito(gabarito: Gabarito): void {
	let i = 0;
	while (rl.question("Deseja registrar uma resposta no gabarito? (s/n) ").toLowerCase() === 's') {
		console.log(`Questão número ${++i}:`);
		gabarito.addAnswer(rl.question("Alternativa correta: "), rl.questionInt("Valor: "));
	}
}

function registrarProva(provas: Prova[], gabarito: Gabarito): void {
	const prova = new Prova(
		rl.question("Nome do aluno: "),
		new Data(rl.questionInt("Dia da realização: "), rl.questionInt("Mês da realização: "), rl.questionInt("Ano da realização: ")),
		gabarito
	);

	while (rl.question("Deseja registrar uma resposta para a prova deste Aluno? (s/n) ").toLowerCase() === 's')
		prova.respostaAluno(rl.question(`Resposta para a questão: ${prova.answers.length}: `));

	provas.push(prova);
}

export function testMenuProva(): void {
	console.clear();
	let options: string =	`\t\t----------- UC4 E5D ---------------\n` +
				`\t\t- 0.  Sair                        -\n` +
				`\t\t- 1.  Registrar gabarito.         -\n` +
				`\t\t- 2.  Registrar prova.            -\n` +
				`\t\t- 3.  Exibir respostas aluno.     -\n` +
				`\t\t- 4.  Exibir respostas gabarito.  -\n` +
				`\t\t- 5.  Exibir número de acertos.   -\n` +
				`\t\t- 6.  Exibir nota.                -\n` +
				`\t\t- 7.  Alterar resposta aluno.     -\n` +
				`\t\t- 8.  Alterar resposta gabarito.  -\n` +
				`\t\t- 9.  Redefinir gabarito.         -\n` +
				`\t\t- 10. Exibir gabarito.            -\n` +
				`\t\t- 11. Exibir prova.               -\n` +
				`\t\t- 12. Remover prova.              -\n` +
				`\t\t- 13. Comparar provas.            -\n` +
				`\t\t- 14. Clonar prova.               -\n` +
				`\t\t----------- UC4 E5D ---------------\n` +
				`\t\t> `;
	let opt: string;

	let gabarito = new Gabarito();
	let provas: Prova[] = [];

	registrarGabarito(gabarito);

	while ((opt = rl.question(options)) != '0') {
		let hold = false;
		console.clear();

		switch (opt) {
		case '1': 
			registrarGabarito(gabarito); break;
		case '2':
			registrarProva(provas, gabarito); break;
		case '3':
			hold = true;
			provas.forEach((p, index) => {
				console.log(`Prova ${index + 1}: ${p.answers.join(', ')}`);
			});
			break;
		case '4':
			hold = true;
			console.log(gabarito.getAnswers()); break;
		case '5':
			hold = true;
			provas.forEach((p, index) => {
				console.log(`Prova ${index + 1}: Acertos: ${p.acertos()}`);
			});
			break;
		case '6':
			hold = true;
			provas.forEach((p, index) => {
				console.log(`Prova ${index + 1}: Nota: ${p.nota()}`);
			});
			break;
		case '7': {
			const provaIndexToEdit = rl.questionInt("Número da prova a editar: ") - 1;
			if (provaIndexToEdit >= 0 && provaIndexToEdit < provas.length) {
				const questionIndex = rl.questionInt("Número da resposta a alterar: ") - 1;
				const newAnswer = rl.question("Nova resposta: ");
				provas[provaIndexToEdit].answers[questionIndex] = newAnswer;
			}
			break; }
		case '8': {
			const gabaritoIndexToEdit = rl.questionInt("Número da resposta no gabarito a alterar: ") - 1;
			const newGabaritoAnswer = rl.question("Nova alternativa correta: ");
			const newGabaritoValue = rl.questionInt("Novo valor: ");
			gabarito.editAnswer(newGabaritoAnswer, newGabaritoValue, gabaritoIndexToEdit);
			break; }
		case '9':
			gabarito.delAnswers(); registrarGabarito(gabarito); break;
		case '10':
			hold = true;
			console.log(gabarito.getAnswers()); break;
		case '11':
			hold = true;
			provas.forEach((p, index) => {
			console.log(`Prova ${index + 1}: ${p.toString()}`);
			});
			break;
		case '12': {
			const provaToRemoveIndex = rl.questionInt("Número da prova a remover: ") - 1;
			hold = true;
			if (provaToRemoveIndex >= 0 && provaToRemoveIndex < provas.length) {
			provas.splice(provaToRemoveIndex, 1);
			}
			break; }
		case '13': {
			const provaIndex1 = rl.questionInt("Número da primeira prova para comparação: ") - 1;
			const provaIndex2 = rl.questionInt("Número da segunda prova para comparação: ") - 1;
			hold = true;
			if (provaIndex1 >= 0 && provaIndex1 < provas.length && provaIndex2 >= 0 && provaIndex2 < provas.length) {
				const p1 = provas[provaIndex1];
				const p2 = provas[provaIndex2];
				console.log(`Prova ${provaIndex1 + 1} é maior que Prova ${provaIndex2 + 1}: ${p1.maior(p2)}`);
				console.log(`Prova ${provaIndex1 + 1} é menor que Prova ${provaIndex2 + 1}: ${p1.menor(p2)}`);
				console.log(`Prova ${provaIndex1 + 1} é igual a Prova ${provaIndex2 + 1}: ${p1.igual(p2)}`);
			}
			break; }
		case '14': {
			const provaToCloneIndex = rl.questionInt("Número da prova a clonar: ") - 1;
			hold = true;
			if (provaToCloneIndex >= 0 && provaToCloneIndex < provas.length) {
				const clonedProva = provas[provaToCloneIndex].clone();
				provas.push(clonedProva);
				console.log("Prova clonada com sucesso.");
			}
			break; }
		case 'JSON':	
			hold = true;
			console.log(JSON.stringify(gabarito)); 
			console.log(JSON.stringify(provas)); 
		}

		if (hold) 
			rl.question("Pressione ENTER para prosseguir.");

		console.clear();
	}
	console.clear();
}
