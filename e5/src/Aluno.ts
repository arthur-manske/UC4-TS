import * as rl from 'readline-sync';

export interface Aluno {
	matricula: number;
	nome: string;
	notaProva1: number;
	notaProva2: number;
	notaTrabalho: number;
	media(): number;
	final(): number;
};

export class Aluno implements Aluno {
	public constructor(
		public matricula: number,
		public nome: string,
		public notaProva1: number,
		public notaProva2: number,
		public notaTrabalho: number) {}

	public setAluno(): void {
		this.matricula    = rl.questionInt("Qual o numero da matricula?");
		this.nome         = rl.question("Qual o nome do aluno? ");
		this.notaProva1   = rl.questionInt("Qual a nota da primeira prova? ");
		this.notaProva2   = rl.questionInt("Qual a nota da segunda prova? ");
		this.notaTrabalho = rl.questionInt("Qual a nota do trabalho? ");
	}

	public getAluno(): string {
		return `Matrícula: ${this.matricula}\nNome: ${this.nome}\nNota Prova 1: ${this.notaProva1}\nNota Prova 2: ${this.notaProva2}\nNota Trabalho: ${this.notaTrabalho}`;	
	}

	public media(): number {
		return (this.notaProva1 + this.notaProva2) / 2;
	}

	public final(): number {
		return (this.notaProva1 + this.notaProva2 + this.notaTrabalho) / 3;
	}
};
