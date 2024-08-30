export interface Data {
	constructor(dia: number, mes: number, ano: number);
	compara(outraData: Data): number;
	getDia(): number;
	getMes(): number;
	getMesExtenso(): string;
	getAno(): number;
	isBissexto(): boolean;
	clone(): Data;
};

export class Data implements Data {
	public constructor(private day: number, private month: number, private year: number) {}

	public compara(outra: Data): number
	{
		return (this.year === outra.getAno() && this.month === outra.getMes() && this.day === outra.getDia()) ? 1 : 0;
	}

	public getDia(): number { return this.day; }
	public getMes(): number { return this.month; }
	public getAno(): number { return this.year; }
	
	public getMesExtenso(): string
	{
		const months = [null, 'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
		return months[this.month];
	}

	public isBissexto(): boolean
	{
		return (this.year % 4 === 0 && this.year % 100 !== 0) || (this.year % 400 === 0);
	}

	public clone(): Data { return new Data(this.day, this.month, this.year); }

	public toString(): string
	{
		const year  = this.year.toString().padStart(4, '0');
		const month = this.month.toString().padStart(2, '0');
		const day   = this.day.toString().padStart(2, '0');

		return `${year}-${month}-${day}`;
	}
};
