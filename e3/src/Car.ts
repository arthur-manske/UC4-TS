export class Car {
	public constructor(
		private model: string,
		private kmPerLitter: number,
		private gas: number,
		private maxGas: number,
	) {}

	public ride(distance: number): void {
		let spend = distance * this.kmPerLitter;
		if (spend > this.gas) {
			console.log(`O seu ${this.model} precisa de ${spend} litros de gasolina, mas tem apenas ${this.gas}.`);
			return;
		}

		this.gas -= spend;
	}
	
	public getModel(): string { return this.model; }
	public getGas(): number { return this.gas; }
	public getMaxGas(): number { return this.maxGas; }	
	public getKmPerLitter(): number { return this.kmPerLitter; }

	public addGas(gas: number): void {
		if (this.gas + gas > this.maxGas) {
			console.log("A quantidade de gasolina ultrapassa a capacidade máxima do tanque de gasolina.");
			return;
		}
		
		this.gas += gas;
	}
};
