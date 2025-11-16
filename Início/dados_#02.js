/* Assunto: Variáveis e Constantes
Abaixo criei duas variáveis: "preco" e "desconto".
Indiquei nelas os valores 25.00 e 0.10, respectivamente;
Sendo o preço total de um produto e o valor do desconto (10%).
*/

let preco = 25.00 
let desconto = 0.10

/*
Abaixo eu usei os valores literiais 25.00 e 0.90 para calcular o preço com desconto.
Usei o 0.90 porque é o valor restante após aplicar o desconto de 10%.
*/
console.log(25.00 * 0.90);

/*
Abaixo eu usei as variáveis "preco" e "desconto" para calcular o preço com desconto.
*/

let precoComDesconto = preco * (1 - desconto)
console.log(precoComDesconto);

/*
Podemos ainda concatenar texto com valores de variáveis.
Abaixo eu mostro o preço com desconto em uma mensagem.
*/

let nome = "Caneca"; //Isso é uma string (texto)
let categoria = "Produto";

console.log("Produto: " + nome 
    + ". Categoria: " + categoria
    + ". Preço com desconto: R$ " + precoComDesconto);