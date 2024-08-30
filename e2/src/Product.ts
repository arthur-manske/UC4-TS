import * as rl from 'readline-sync';

export class Product {
	public constructor(
		public name: string,
		public categories: string[],
		public brand: string,
		public buyPrice: number,
		public sellPrice: number,
		public stockAmount: number
	) {}

	public getProduct(): string {
		let productString =	`\tProduto:    ${this.brand} ${this.name}\n` +
					`\tCompra:     R$ ${this.buyPrice}\n`        +
					`\tVenda:      R$ ${this.sellPrice}\n`       +
					`\tLucro:      R$ ${this.getProfit()}\n`     +
					`\tEm estoque: ${this.stockAmount}\n`        +
					`\tCategorias:`;
		
		for (let i = 0; i < this.categories.length; ++i) {
			productString += `\n\t\t${this.categories[i]}`;
			if (i + 1 < this.categories.length)
				productString += ', ';
		}

		return productString;
	}

	public setProduct(): void {
		this.name  = rl.question("Nome do produto: ");
		this.brand = rl.question("Marca do produto: ");
		
		this.categories = new Array<string>();

		do {
			this.categories.push(rl.question("Nome da categoria: "));	
		} while (rl.question("Adicionar mais categorias? (s/n)").toLowerCase() == "s");

		this.buyPrice  = rl.questionInt("Preço de compra (custo): ");
		this.sellPrice = rl.questionInt("Preço de venda (receita): ");

		this.stockAmount = rl.questionInt("Quantidade em estoque: ");
	}

	public getProfit(): number {
		return this.sellPrice - this.buyPrice;
	}
}; 
