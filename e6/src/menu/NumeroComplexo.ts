import * as reader from 'readline-sync';
import { NumeroComplexo } from '../NumeroComplexo';

export function menuNumeroComplexo(): void {
	/* \ antes de caractere de controle causa a não-exibição dele em template string */
	const message = `\
		----------------- Teste NumeroComplexo -------------------
		-                                                        -
		- 0.  Terminar os testes.                                -
		- 1.  Exibir o número real.                              -
		- 2.  Exibir o número imaginário.                        -
		- 3.  Definir o número real.                             -
		- 4.  Definir o número imaginário.                       -
		- 5.  Exibir a adição com outro número complexo.         -
		- 6.  Exibir a subtração com outro número complexo.      -
		- 7.  Exibir a multiplicação com outro número complexo.  -
		- 8.  Exibir a divisão com outro número complexo.        -
		- 9.  Igular a adição com outro número complexo.         -
		- 10. Igular a subtração com outro número complexo       -
		- 11. Igular a multiplicação com outro número complexo   -
		- 12. Igular a divisão com outro número complexo         -
		- 13. Exibir o módulo do número complexo.                -
		- 14. Comparar com outro número complexo.                - 
		- 15. Exibir o número complexo (string).                 - 
		- 69. Exibir o número complexo (JSON).                   -
		-                                                        -
		----------------- Teste NumeroComplexo -------------------
		> `;

	let complex = new NumeroComplexo();
	let result: NumeroComplexo = new NumeroComplexo();
	let opt: number = 1;

	while (opt != 0) {
		console.clear();

		switch ((opt = Number(reader.question(message)))) {
		case 0: break;
		case 1:
			console.log(complex.a);
			reader.question("Pressione a tecla enter para continuar");
			break;
		case 2:
			console.log(complex.b);
			reader.question("Pressione a tecla enter para continuar");
			break;
		case 3:
			complex.a = reader.questionInt("Valor: ");
			break;
		case 4:
			complex.b = reader.questionInt("Valor: ");
			break;
		case 9:
		case 5: {
			let other = new NumeroComplexo(reader.questionInt("Valor real: "), reader.questionInt("Valor imaginário: "));
			result = complex.somar(other);

			console.log(result.toString());
			reader.question("Pressione a tecla enter para continuar");
			break;
		}
		case 10:
		case 6: {
			let other = new NumeroComplexo(reader.questionInt("Valor real: "), reader.questionInt("Valor imaginário: "));
			result = complex.subtrair(other);

			console.log(result.toString());
			reader.question("Pressione a tecla enter para continuar");
			break;
		}
		case 11:
		case 7: {
			let other = new NumeroComplexo(reader.questionInt("Valor real: "), reader.questionInt("Valor imaginário: "));
			result = complex.multiplicar(other);

			console.log(result.toString());
			reader.question("Pressione a tecla enter para continuar");
			break;
		}
		case 12:
		case 8: {
			let other = new NumeroComplexo(reader.questionInt("Valor real: "), reader.questionInt("Valor imaginário: "));
			result = complex.dividir(other);

			console.log(result.toString());
			reader.question("Pressione a tecla enter para continuar");
			break;
		}
		case 13:
			console.log(complex.modulo());
			reader.question("Pressione a tecla enter para continuar");
			break;
		case 14: {
			let other = new NumeroComplexo(reader.questionInt("Valor real: "), reader.questionInt("Valor imaginário: "));
			console.log(complex.equals(other));
			reader.question("Pressione a tecla enter para continuar");
			break;
		}
		case 15:
			console.log(complex.toString());
			reader.question("Pressione a tecla enter para continuar");
			break;
		case 69:
			console.log(JSON.stringify(complex));
			reader.question("Pressione a tecla enter para continuar");
		}

		// Um truque para evitar ter que escrever mais código
		if (opt >= 9 && opt <= 12)
			complex = result;
	}
}
