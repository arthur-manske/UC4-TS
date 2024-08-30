import * as rl from 'readline-sync';

import { Product } from './Product';
import { Sell    } from './Sell'; 

function main(): void {
	let product = new Product("", new Array<string>(), "", 0, 0, 0);
	let sell    = new Sell("José Sarney", product, 1, "2024-01-07");

	console.clear();
	product.setProduct();
	console.clear();

	while (rl.question(sell.getSell() + "\nAlterar a venda? (s/n)").toLowerCase() === "s") {
		sell.setSell();
		console.clear();
	}

	console.log(sell.getSell());
	rl.question("Pressione ENTER para continuar");

	console.clear();
}

main();
