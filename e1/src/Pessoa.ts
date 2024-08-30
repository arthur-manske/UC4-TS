export class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    cumprimentar(): void {
        console.log(`Olá, meu nome é ${this.nome}.`);
    }
}

export class Crianca extends Pessoa {
    cumprimentar(): void {
        console.log(`Oi, meu nome é ${this.nome} e eu tenho ${this.idade} anos!`);
    }
}

export class Adulto extends Pessoa {
    cumprimentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

export class Idoso extends Pessoa {
    cumprimentar(): void {
        console.log(`Bença, eu sou ${this.nome}, tenho ${this.idade} anos.`);
    }
}
