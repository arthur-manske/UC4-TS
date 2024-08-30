import { Data } from './Data';

export interface Voo {
	proximoLivre(): number;
	verifica(cadeira: number): boolean;
	ocupa(cadeira: number): boolean;
	vagas(): number;
	getVoo(): string;
	getData(): Data;
	clone(): Voo;
};

export class Voo implements Voo {
	private seats: boolean[];

	public constructor(private id: string, private date: Data) { this.seats = new Array<boolean>(100).fill(false); }

	public proximoLivre(): number
	{
		for (let i = 0; i < this.seats.length; ++i) {
			if (this.seats[i] === false)
				return (i + 1);
		}

		return -1;
	}

	public verifica(chair: number): boolean { return !(this.seats[chair - 1]); }

	public ocupa(chair: number): boolean
	{
		chair -= 1;
		if (chair >= this.seats.length || chair < 0 || this.seats[chair])
			return false;
		return (this.seats[chair] = true);
	}

	public vagas(): number
	{
		let result = 0;
		for (let i = 0; i < this.seats.length; ++i) {
			if (this.verifica(i)) result++;
		}

		return result;
	}

	public getVoo(): string { return this.id; }
	public getData(): Data { return this.date; }

	public clone(): Voo { return new Voo(this.id, this.date); }

	public toString(): string
	{
		let stringfied = `Vôo ${this.id} - ${this.date}\n\t`;
		for (let i = 0; i < this.seats.length; ++i)
			stringfied += (this.seats[i]) ? 'O' : 'L';

		return stringfied;
	}
};
