export class NumeroComplexo {
	/* Construtor inferido */
	constructor(private real: number = 0, private imaginary: number = 0) {}

	/* Getter para real */
	get a(): number { return this.real; }
	/* Getter para imaginary */
	get b(): number { return this.imaginary; }

	/* Setter para real */
	set a(a: number) { this.real      = a; }
	/* Setter para imaginary */
	set b(b: number) { this.imaginary = b; }

	somar(b: NumeroComplexo): NumeroComplexo {
		return new NumeroComplexo(this.real + b.a, this.imaginary + b.b);
	}

	subtrair(b: NumeroComplexo): NumeroComplexo {
		return new NumeroComplexo(this.real - b.a, this.imaginary - b.b);
	}

	multiplicar(b: NumeroComplexo): NumeroComplexo {
		return new NumeroComplexo(
			this.real * b.a - this.imaginary * b.b,
			this.real * b.b + this.imaginary * b.a
		);
	}

	dividir(b: NumeroComplexo): NumeroComplexo {
	        const denominator = (b.a * b.a) + (b.b * b.b);

		return new NumeroComplexo(
			(this.real      * b.a + this.imaginary * b.b) / denominator,
			(this.imaginary * b.a - this.real      * b.b) / denominator
		);
	}

	equals(b: NumeroComplexo): boolean { return this.real === b.a && this.imaginary === b.b; }
	
	toString(): String { return `${this.real} + ${this.imaginary}i`; }

	modulo(): number {
		return Math.sqrt(
			(this.real * this.real) + (this.imaginary * this.imaginary)
		);
	}
};
