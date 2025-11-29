// Os operadores lógicos são usados para combinar expressões booleanas.
// Em JavaScript, os principais operadores lógicos são: AND (&&), OR (||) e NOT (!).

// Operador AND (&&) - Utilizado para verificar se ambas as condições são verdadeiras.
let a = true;
let b = false;
let resultadoAND = a && b; // false, porque b é false
console.log("Resultado do AND (a && b):", resultadoAND);

// Operador OR (||) - Utilizado para verificar se pelo menos uma das condições é verdadeira.
let resultadoOR = a || b; // true, porque a é true
console.log("Resultado do OR (a || b):", resultadoOR);

/* Operador NOT (!) - Utilizado para inverter o valor de uma expressão booleana, 
nega uma afirmação. */ 

let resultadoNOT = !a; // false, porque a é true
console.log("Resultado do NOT (!a):", resultadoNOT);