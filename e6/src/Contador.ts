/* Um contador abstrato */
export class Contador {
	/* Guardar de forma privada o valor contido no contador */	
	private value: number = 0;

	/* Construtor, o contador é iniciado vazio */
	public constructor() {}

	/* Zera os valores */
	public zerar(): void { this.value = 0; }
	
	/* Incrementa o contador */
	public incrementar(): void { this.value++; }

	/* Retorna o valor contido no contador */
	public valor(): number { return this.value; }
};
