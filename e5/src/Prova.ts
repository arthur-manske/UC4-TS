import { Data } from  './Data';

export class Gabarito {
	public answers: string[] = [];
	public values: number[] = [];
	public constructor() {}

	public getAnswers(): string { return this.answers.join(', '); }

	public addAnswer(answer: string, value: number): void
	{
		this.values.push(value);
		this.answers.push(answer);
	}

	public delAnswers(): void
	{
		this.values = [];
		this.answers = [];
	}

	public editAnswer(answer: string, value: number, index: number): void
	{
		if (index < 0 || index >= this.answers.length) return;
		this.values[index] = value;
		this.answers[index] = answer;
	}
};

export class Prova {
	public answers: string[] = [];    
	public constructor(public aluno: string, public date: Data, private gabarito: Gabarito) {}

	public respostaAluno(resposta: string): void
	{
		this.answers.push(resposta);
	}

	public nota(): number
	{
		let result = 0;
		for (let i = 0; i < this.answers.length; ++i) {
			if (this.answers[i] === this.gabarito.answers[i])
				result += this.gabarito.values[i];
		}
		return result;
	}

	public acertos(): number
	{
		let cnt = 0;
		for (let i = 0; i < this.answers.length; ++i) {
			if (this.answers[i] === this.gabarito.answers[i])
				cnt++;
		}
		return cnt;
	};

	public maior(outra: Prova): number
	{
		return this.nota() > outra.nota() ? 1 : 0;
	}
    
	public menor(outra: Prova): number
	{
		return this.nota() < outra.nota() ? 1 : 0;
	}

	public igual(outra: Prova): number
	{
		return this.nota() === outra.nota() ? 1 : 0;
	}
    
	public clone(): Prova
	{
		const cloned = new Prova(this.aluno, this.date, this.gabarito);
		cloned.answers = [...this.answers];
		return cloned;
	}

	public toString(): string
	{
		return `Aluno: ${this.aluno}, Data: ${this.date.toString()}, Respostas: ${this.answers.join(', ')}, Nota: ${this.nota()}`;
	}
}
