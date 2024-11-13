// Duas listas separadas de números.
const a = [1, 2, 3, 4, 5];
const b = [6, 7, 8, 9, 10];

// Combinamos ambas as listas e somamos todos os números usando "reduce".
const soma = [...a, ...b].reduce((acc, num) => acc + num, 0);  // Iniciamos a soma em 0.
