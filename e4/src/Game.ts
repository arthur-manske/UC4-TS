export class Game {
	public constructor(private title: string, private genre: string, private ageClassification: number) {}
	public getDetails(): string
	{
		try {
			return `Título: ${this.title}\nGênero: ${this.genre}\nFaixa etária: ${this.ageClassification}`;
		} catch (error) {
			console.log(`Game.getDetails(): ${error}`);
		}

		return '';
	}

	public getTitle(): string
	{
		try {
			return this.title;
		} catch(error) {
			console.log(`Game.getTitle(): ${error}`);
		}

		return '';
	}

	public getGenre(): string
	{
		try {
			return this.genre;
		} catch(error) {
			console.log(`Game.getGenre(): ${error}`);
		}

		return '';
	}

	public getAgeClassification(): number
	{
		try {
			return this.ageClassification;
		} catch(error) {
			console.log(`Game.getAgeClassification(): ${error}`);
		}
		
		return -1;
	}
};

export class EletronicGame extends Game {
	public constructor(
		title: string,
		genre: string,
		ageClassification: number,
		private plataform: string) { super(title, genre, ageClassification); }
	
	public getDetails(): string
	{
		try {
			return `Título: ${this.getTitle()}\nGênero: ${this.getGenre()}\nFaixa etária: ${this.getAgeClassification()}\nPlataforma: ${this.plataform}`;
		} catch (error) {
			console.log(`EletronicGame.getDetails(): ${error}`);
		}
	}

	public getPlataform(): string
	{
		try {
			return this.plataform;
		} catch(error) {
			console.log(`EletronicGame.getPlataform(): ${error}`);
		}

		return '';
	}

};

export class BoardGame extends Game {
	public constructor(
		title: string,
		genre: string,
		ageClassification: number,
		private playerNumber: number) { super(title, genre, ageClassification); }
	
	public getDetails(): string
	{
		try {
			return `Título: ${this.getTitle()}\nGênero: ${this.getGenre()}\nFaixa etária: ${this.getAgeClassification()}\nNúmero de jogadores: ${this.playerNumber}`;
		} catch (error) {
			console.log(`BoardGame.getDetails(): ${error}`);
		}
	}

	public getPlayerNumber(): number
	{
		try {
			return this.playerNumber;
		} catch(error) {
			console.log(`BoardGame.getPlayerNumber(): ${error}`);
		}

		return -1;
	}

};
