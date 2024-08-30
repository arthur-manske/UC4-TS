import * as rl from 'readline-sync';
import { Pessoa, Crianca, Adulto, Idoso } from '../Pessoa';

export function testMenuPessoa(): void {
	let pessoa  = new Pessoa(rl.question("Nome da pessoa: "), rl.questionInt("Idade da pessoa: "));
	let crianca = new Crianca(rl.question("Nome da criança: "), rl.questionInt("Idade da criança: "));
	let adulto  = new Adulto(rl.question("Nome do adulto: "), rl.questionInt("Idade do adulto: "));
	let idoso   = new Idoso(rl.question("Nome do idoso: "), rl.questionInt("Idade do idoso: "));

	const message = `\
		---------------------- UC4 E1B -------------------------------
		- 0.  Sair                                                   -
		- 1.  Pessoa:  Definir nome.                                 - 
		- 2.  Pessoa:  Definir idade.                                - 
		- 3.  Pessoa:  Cumprimentar.                                 -
		- 4.  Criança: Definir nome.                                 - 
		- 5.  Criança: Definir idade.                                - 
		- 6.  Criança: Cumprimentar.                                 -
		- 7.  Adulto:  Definir nome.                                 - 
		- 8.  Adulto:  Definir idade.                                - 
		- 9.  Adulto:  Cumprimentar.                                 -
		- 10. Idoso:   Definir nome.                                 -
		- 11. Idoso:   Definir idade.                                -
		- 12. Idoso:   Cumprimentar.                                 -
		- Extras:                                                    -
		-	JSON. Exibe uma representação em JSON da classe      -
		---------------------- UC4 E1B -------------------------------
		> `

	let opt: string;

	console.clear();

	while ((opt = rl.question(message)) != '0') {
		let hold = false;

		switch (opt.toUpperCase()) {
		case '1':
			pessoa.nome = rl.question("Nome: ");
			break;
		case '2':
			pessoa.idade = rl.questionInt("Idade: ");
			break;
		case '3':
			hold = true;
			console.log(pessoa.cumprimentar());
			break;
		case '4':
			crianca.nome = rl.question("Nome: ");
			break;
		case '5':
			crianca.idade = rl.questionInt("Idade: ");
			break;
		case '6':
			hold = true;
			console.log(crianca.cumprimentar());
			break;
		case '7':
			adulto.nome = rl.question("Nome: ");
			break;
		case '8':
			adulto.idade = rl.questionInt("Idade: ");
			break;
		case '9':
			hold = true;
			console.log(adulto.cumprimentar());
			break;
		case '10':
			idoso.nome = rl.question("Nome: ");
			break;
		case '11':
			idoso.idade = rl.questionInt("Idade: ");
			break;
		case '12':
			hold = true;
			console.log(idoso.cumprimentar());
			break;
		case 'JSON':
			hold = true;
			console.log(JSON.stringify(pessoa));
			console.log(JSON.stringify(crianca));
			console.log(JSON.stringify(adulto));
			console.log(JSON.stringify(idoso));
		}

		if (hold)
			rl.question("Pressione ENTER para continuar.");

		console.clear();
	}
}
