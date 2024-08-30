import * as rl from 'readline-sync';

import { Data } from '../Data';
import { Voo } from '../Voo';

export function testMenuVoo(): void {
	console.clear();

	let options: string =	`\t\t----------- UC4 E5C ---------------\n` +
				`\t\t- 0. Sair                         -\n` +
				`\t\t- 1. Exibir número.               -\n` +
				`\t\t- 2. Exibir data (yyyy-mm-dd).    -\n` +
				`\t\t- 3. Próximo vaga livre.          -\n` +
				`\t\t- 4. Exibir número vagas.         -\n` +
				`\t\t- 5. Verificar vaga.              -\n` +
				`\t\t- 6. Ocupar vaga.                 -\n` +
				`\t\t- 7. Exibir vôo como string.      -\n` + 
				`\t\t- 8. Clonar vôo.                  -\n` +
				`\t\t- 9. Redefinir vôo.               -\n` +
				`\t\t----------- UC4 E5C ---------------\n` +
				`\t\t> `;
	let opt: string;
	let voo = new Voo(
		rl.question("Número do Vôo: "),
		new Data(rl.questionInt("Dia: "), rl.questionInt("Mês: "), rl.questionInt("Ano: "))
	);

	while ((opt = rl.question(options)) != '0') {
		let hold = false;

		switch (opt) {
		case '1': 
			hold = true;
			console.log(voo.getVoo());
			break;
		case '2':
			hold = true;
			console.log(voo.getData().toString());
			break;
		case '3':
			hold = true;
			console.log(voo.proximoLivre());
			break;
		case '4':
			hold = true;
			console.log(voo.vagas());
			break;
		case '5':
			hold = true;
			console.log(voo.verifica(rl.questionInt("Número da vaga: ")));
			break;
		case '6':
			hold = true;
			console.log(voo.ocupa(rl.questionInt("Número da vaga: ")));
			break;
		case '7':
			hold = true;
			console.log(voo.toString());
			break;
		case '8':
			hold = true;
			console.log(voo.clone().toString());
			break;
		case '9':
			voo = new Voo(
				rl.question("Número do Vôo: "),
				new Data(rl.questionInt("Dia: "), rl.questionInt("Mês: "), rl.questionInt("Ano: "))
			);
			break;
		case 'JSON':
			hold = true;
			console.log(JSON.stringify(voo));
		}

		if (hold)
			rl.question("Pressione ENTER para prosseguir.");

		console.clear();
	}
	console.clear();
}
