export class Livro {
	public constructor(public titulo: string, public autor: string, public anoPublicacao: number) {}
	public obterDetalhes(): string {
		return "O título do livro é " + this.titulo +
			", o autor é " + this.autor +
			" e foi publicado em " + this.anoPublicacao + ".";
	}
};
