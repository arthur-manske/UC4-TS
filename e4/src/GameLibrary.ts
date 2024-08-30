import { Game, EletronicGame, BoardGame } from './Game';

export class GameLibrary {
	private games: Game[] = [];
	public constructor() {}

	public addGame(game: Game): void {
		try {
			this.games.push(game);
		} catch (error) {
			console.log(`GameLibrary.addGame(): ${error}`);
		}
	}

	public delGame(title: string): void {
		try {
			for (let i = 0; i < this.games.length; ++i) {
				if (this.games[i].getTitle() === title) {
					this.games.splice(i, 1);
					return;
				}
			}
			throw new Error(`No game named ${title}`);
		} catch (error) {
			console.log(`GameLibrary.delGame(): ${error}`);
		}
	}

	public listGames(): string {
		let result: string = '';

		try {
			for (let i = 0; i < this.games.length; ++i)
				result += this.games[i].getDetails() + '\n';
		} catch(error) {
			console.log(`GameLibrary.listGames(): ${error}`);
		}

		return result;
	}
}; 
