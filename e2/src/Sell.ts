import * as rl from 'readline-sync';
import { Product } from './Product';

export class Sell {
	public constructor(
		public clientName: string,
		public product: Product,
		public amount: number,
		public date: string
	) {}

	public getSell(): string {
		return  `Nome do produto: ${this.product.name}\n` +
			`Quantidade: ${this.amount}\n` +
			`Valor total: ${this.getFinalPrice()}\n` +
			`Comprador: ${this.clientName}\n` + 
			`Detalhes do produto:\n` +
			this.product.getProduct();
	}

	public setSell(): void {
		if (rl.question("Você gostaria de modificar o produto? (s/n)").toLowerCase() === "s")
			this.product.setProduct();

		this.clientName = rl.question("Nome do comprador: ");
		this.amount = rl.questionInt("Quantidade do produto: ");
		this.date   = rl.question("Data da venda: ");
	}

	public getFinalPrice(): number {
		return (this.product.sellPrice * this.amount);
	}
};
