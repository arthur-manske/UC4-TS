export class Aluno {
	public constructor(public nome: string = "", public notas: number[] = []) {}
	public addNota(nota: number): void { this.notas.push(nota); }
	public calcularMedia(): number {
		let sum: number = 0;
        
		for (let i = 0; i < this.notas.length; i++)
			sum += this.notas[i];

		if (this.notas.length === 0)
			return 0;

		return sum / this.notas.length;
	}
};
