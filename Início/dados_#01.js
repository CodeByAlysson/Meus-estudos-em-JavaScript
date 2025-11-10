var nome = "Computador";
var quantidade = 1;
let preco = 2500.00; 
/*

a forma mais moderna de criar uma variável no JS é usando let.
Existem duas palavras-chave para criarmos variáveis: var (antigo) ou let (moderno). 
Até a especificação ECMAScript 2015 (ES6), a palavra-chave var era utilizada para declarar uma variável. 
Entretanto, era possível declararmos duas variáveis com o mesmo nome, o que, às vezes, poderia levar a um resultado imprevisível e incorreto.
mas também podemos usar var ou const.

*/
let imposto = 2.5;
let precoFinal = preco + (preco * imposto / 100);


console.log(nome);
console.log(quantidade);
console.log(preco);
console.log(imposto);
console.log(precoFinal);