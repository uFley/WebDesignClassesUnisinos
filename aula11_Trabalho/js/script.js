// 1. Crie atributos para nome, sobrenome e o número de anos trabalhados pelo funcionário.
class Funcionario {
    constructor (nome, sobrenome, anosTrabalhados) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.anosTrabalhados = anosTrabalhados;
    }
}

// 2. Instancie ao menos 5 funcionários com valores dos atributos definidos por você. Após, adicione os funcionários em um array.
let funcionario1 = new Funcionario("Morgrun", "Trevoeiro", 50);
let funcionario2 = new Funcionario("Jasper", "Tiefling", 1);
let funcionario3 = new Funcionario("Beorn", "Bárbaro", 30);
let funcionario4 = new Funcionario("Pinpin", "Gnome", 4);
let funcionario5 = new Funcionario("Enrico", "Warlock", 15);

// Inicializa array e adiciona todos os funcionários
let funcionarios = [funcionario1, funcionario2, funcionario3, funcionario4, funcionario5];

// 3. Defina, via prototype, uma função que deve retornar um texto com todos os detalhes do funcionário de forma organizada. 
Funcionario.prototype.getAllInformation = function () {
    console.log(`O funcionário ${this.nome} ${this.sobrenome} trabalhou nessa empresa por ${this.anosTrabalhados} anos.`);
};

// 4. Itere por todos os funcionários contidos no array, invocando a função definida via prototype para cada um deles e exiba os resultados no console.
//funcionarios.getAllInformation().forEach(n => {});
funcionarios.forEach(n => {
    n.getAllInformation();
});