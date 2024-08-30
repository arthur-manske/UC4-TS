import * as rl from 'readline-sync';

import { Data } from '../Data';

export function testMenuData(): void {
	console.clear();

	let options: string =	`\t\t----------- UC4 E5B ---------------\n` +
				`\t\t- 0. Sair                         -\n` +
				`\t\t- 1. Exibir dia da data.          -\n` +
				`\t\t- 2. Exibir mês da data.          -\n` +
				`\t\t- 3. Exibir ano da data.          -\n` +
				`\t\t- 4. Exibir se o ano é bissexto.  -\n` +
				`\t\t- 5. Comparar com outra data.     -\n` +
				`\t\t- 6. Clonar data.                 -\n` +
				`\t\t- 7. Redefinir data.              -\n` + 
				`\t\t- 8. Exibir como yyyy-mm-dd.      -\n` +
				`\t\t- 9. Mês por extenso.             -\n` + 
				`\t\t----------- UC4 E5B ---------------\n` +
				`\t\t> `;
	let opt: string;
	let data = new Data(rl.questionInt("Dia: "), rl.questionInt("Mês: "), rl.questionInt("Ano: "));

	while ((opt = rl.question(options)) != '0') {
		let hold = false;

		switch (opt) {
		case '1': 
			hold = true;
			console.log(data.getDia());
			break;
		case '2':
			hold = true;
			console.log(data.getMes());
			break;
		case '3':
			hold = true;
			console.log(data.getAno());
			break;
		case '4':
			hold = true;
			console.log(data.isBissexto());
			break;
		case '5':
			hold = true;
			console.log(data.compara(new Data(rl.question("Dia: "), rl.question("Mês: "), rl.question("Ano: "))));
			break;
		case '6':
			hold = true;
			console.log(data.clone());
			break;
		case '7':
			data = new Data(rl.questionInt("Dia: "), rl.questionInt("Mês: "), rl.questionInt("Ano: "));
			break;
		case '8':
			hold = true;
			console.log(data.toString()); 
			break;
		case '9':
			hold = true;
			console.log(data.getMesExtenso());
			break;
		case 'JSON':
			hold = true;
			console.log(JSON.stringify(data));
		}

		if (hold)
			rl.question("Pressione ENTER para prosseguir.");

		console.clear();
	}
		
	console.clear();
}
