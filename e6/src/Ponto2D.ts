/* Representa uma posição em um plano cartesiano de duas dimensões */
export class Ponto2D {
	/* Representa de modo privado o eixo x da classe */
	private _x: number = 0;
	/* Representa de modo privado o eixo y da classe */
	private _y: number = 0;

	/* Top-level Ponto2D(void)  para o construtor */
	constructor();
	/* Top-level Ponto2D(number, number)  para o construtor */
	constructor(x: number, y: number);
	/* Top-level Ponto2D(Ponto2D)  para o construtor */
	constructor(spec: Ponto2D);
	
	/* Construtor real */
	constructor(x?: number | Ponto2D, y?: number) {
		if (typeof(x) == "object") {
			let spec = x;
			this._x = spec.x;
			this._y = spec.y;
			return;
		}
		
		if (x && y) {
			this._x = x;
			this._y = y;
		}
	}

	/* Getter para o x */
	get x(): number { return this._x; }
	/* Getter para o y */
	get y(): number { return this._y; }

	/* Setter para o x */
	set x(x: number) { this._x = x; }
	/* Setter para o y */
	set y(y: number) { this._y = y; }

	/* Top-level void(number, number) */
	move(x: number, y: number): void;
	/* Top-level void(Ponto2D) */
	move(spec: Ponto2D): void;
	
	/* Implementação da função que move o Ponto2D */
	move(x?: number | Ponto2D, y?: number): void {
		if (typeof(x) === "object") {
			let spec = x;

			this._x = spec.x;
			this._y = spec.y;

			return;
		}

		if (x) 
			this._x = x;
		if (y) 
			this._y = y;
	}
	
	/* Checa igualdade entre dois Pontos2D */
	equals(b: Ponto2D): boolean { return this.x === b.x && this.y === b.y; }
	
	/* Implementação do método toString para Ponto2D */
	toString(): string { return `Ponto2D { .x = ${this.x}, .y = ${this.y} }`; }

	/* Distância entre dois Ponto2D (Manhattan, não Euclidiana) */
	distancia(b: Ponto2D): number { return Math.abs(this.x - b.x) + Math.abs(this.y - b.y); }

	/* Implementação do método clone para Ponto2D */
	clone(): Ponto2D { return new Ponto2D(this); }
};
