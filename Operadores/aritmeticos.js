// valores literais exemplos de operadores aritméticos em JavaScript

console.log(7 + 4);  // adição
console.log(5 - 7); // subtração
console.log(6 * 5);  // multiplicação
console.log(20 / 4); // divisão
console.log(17 % 6); // módulo (resto da divisão)
console.log(2 ** 3); // exponenciação


// podemos ainda usar variáveis

let a = 10;
let b = 30;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// podemos utilizar os operadores aritméticos em expressões mais complexas:

a = a + b * a / b;
console.log(a);

/* 
Lembre-se da precedência dos operadores: multiplicação,
divisão e módulo têm precedência sobre adição e subtração.
Para alterar a precedência, utilize parênteses. 
*/