import * as rl from 'readline-sync';

import { Game, EletronicGame, BoardGame } from './Game';
import { GameLibrary } from './GameLibrary';

function main(): void {
	let options: string =	`\t\t------------ UC4 E4 --------------\n` +
				`\t\t- 0. Sair.                       -\n` +
				`\t\t- 1. Listar jogos.               -\n` +
				`\t\t- 2. Adicionar jogo eletrônico   -\n` +
				`\t\t- 3. Adicionar jogo de tabuleiro -\n` +
				`\t\t- 4. Remover jogo por título.    -\n` +
				`\t\t------------ UC4 E4 --------------\n` +
				`\t\t> `;
	
	let gameLibrary = new GameLibrary();
	let opt: string;

	console.clear();

	while ((opt = rl.question(options)) != '0') {
		let hold = false;

		switch (opt) {
		case '1':
			hold = true;
			console.log(gameLibrary.listGames());
			break;
		case '2':
			hold = true;
			gameLibrary.addGame(new EletronicGame(rl.question("Título: "), rl.question("Genêro: "), rl.questionInt("Faixa etária: "), rl.question("Plataforma: ")));
			break;
		case '3':
			hold = true;
			gameLibrary.addGame(new BoardGame(rl.question("Título: "), rl.question("Genêro: "), rl.questionInt("Faixa etária: "), rl.questionInt("Número de jogadores: ")));
			break;
		case '4':
			hold = true;
			gameLibrary.delGame(rl.question("Título: "));
			break;
		case 'JSON':
			hold = true;
			console.log(JSON.stringify(gameLibrary));
		}

		if (hold)
			rl.question("Pressione ENTER para prosseguir.");

		console.clear();
	}
}

main();
