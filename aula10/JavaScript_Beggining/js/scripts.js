/* alert("Teste");

let nome = prompt("Qual o seu nome?"); //Se clicar OK, retorna o valor. Caso contrário retorna NULL.

alert(`Boa noite ${nome}`); // Sempre que utilizar variáveis no texto, chamar com CRASE (`)
*/
const nomes = ["Piá de Bosta", "Seu Alfredo", "Anakin da Shopee"];
const valores = new Array(10);

/*
alert(nomes[2]); // Imprime Anakin...
alert(valores[9]); // Imprime undefined
*/

nomes.push("Trambiqueiro"); // Add para o array nomes na última posição
nomes.pop(); // Retira o último nome do array

// 1 -> Indica onde inicia a inserçã do elemento
// 0 -> Indica que NÃO quero deletar nenhum elemento a partir dali
// "SOTAM"  "Seu Zé" -> Strings que estou adicionando no Array

nomes.splice(1, 0, "SOTAM", "Seu Zé");
console.log(nomes);

// REtorna o valor procurado se for encontradoq ou ndefined aso contrário
const beltrano = nomes.find( function(nome) { return nome == "Beltrano" } );
const beltrano2 = nomes.find( nome => nome == "Beltrano"); // Sintaxe alternativa (Arrow Functions)
console.log(beltrano); 

let posBeltrano = nomes;indexOf("Beltrano"); // Retorna o index (posição) do beltrano, ou -1 caso não encontre/exista

let numeros = [ 12, 9, 1, 15, 88, 13, 29, 14];

