class Cachorro {
    constructor (nome, peso, cor) {
        this.nome = nome;
        this.peso = peso;
        this.cor = cor;
    }
}

let meuCao = new Cachorro ("Jubileu", 30, "Roxo");
let meuOutroCao = new Cachorro ("Jader", 28);

// Mostrando o UNDEFINED quando chamamos sem parâmetro o objeto
console.log(`Meu cão tem o nome ${meuCao.nome}, pesa ${meuCao.peso} e é da cor ${meuCao.cor}`)
console.log(`Meu cão tem o nome ${meuOutroCao.nome}, pesa ${meuOutroCao.peso} e é da cor ${meuOutroCao.cor}`)


class Aluno {
    // Variáveis privadas
    #nome;
    #idade;
    #curso;
    constructor (nome, idade = "18", curso = "Análise e Desenvolvimento de Sistemas") {
        this.#nome = nome;
        this.#idade = idade;
        this.#curso = curso;
    }
    // Chamada de apresentação
    apresentacao() {
        console.log(`Me chamo ${this.#nome}, tenho ${this.#idade} anos e faço ${this.#curso}.`);
    }

    materiaFavorita(materia) {
        return `${materia} é a minha disciplina favorita no curso de ${this.#curso}`
    }

    get nome () { return this.#nome;}
    set nome(novoNome) {
        this.#nome = novoNome;
    }
}

let aluno1 = new Aluno("Arthur", 20, "Ciência da Computação");
let aluno2 = new Aluno("Bruno");

aluno1.apresentacao();
aluno2.apresentacao();

aluno1.nome = "Sarah Nothingan"
aluno1.apresentacao();

console.log(aluno1.materiaFavorita("Lógica"))

// AAAAAAAAA

class Veiculo {
    constructor (cor, velocidadeAtual, velocidadeMaxima) {
        this.cor = cor;
        this.velocidadeAtual = velocidadeAtual;
        this.velocidadeMaxima = velocidadeMaxima;
    }

    acelera(aumentoVelocidadeAtual) {
        this.velocidadeAtual += aumentoVelocidadeAtual;
        
        if (this.velocidadeAtual > this.velocidadeMaxima) {
            this.velocidadeAtual = this.velocidadeMaxima;
        }
    
    }
}

class Moto extends Veiculo {
    constructor(cor, velocidadeAtual, velocidadeMaxima, tipoCombustivel) {
        super (cor, velocidadeAtual, velocidadeMaxima);
        this.tipoCombustivel = tipoCombustivel;
    }

    empinar() {
        console.log("Moto empinando...");
    }
}