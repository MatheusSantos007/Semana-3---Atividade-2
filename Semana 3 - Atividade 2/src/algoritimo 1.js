// Pedimos ao usuário o tamanho da lista de números (exemplo: "5" para uma lista de 5 elementos).
const tamanho = prompt('Digite o tamanho da lista de números');

// Aqui, criamos uma lista com o tamanho escolhido, preenchendo cada posição com "null" só para ocupar o espaço.
// Depois, vamos transformar esses valores em uma sequência de números.
const lista = new Array(tamanho).fill(null);

// Primeiro, transformamos cada item "null" em um número da sequência usando "map". Por exemplo, para "5", teremos [1, 2, 3, 4, 5].
// Em seguida, usamos "reduce" para multiplicar todos os números da lista, dando o produto final.
lista
 .map((item, index) => index + 1)  // Usamos o índice para criar a sequência, começando de 1.
 .reduce((acumulador, item) => acumulador * item);  // Multiplicamos cada valor ao acumulador, calculando o produto total.

// Agora, repetimos o processo de criação da lista, mas dessa vez faremos a soma dos elementos em vez da multiplicação.
new Array(tamanho)
 .fill(null)
 .map((item, index) => index + 1)  // Transformamos novamente em uma sequência de 1 até o tamanho da lista.
 .reduce((acumulador, item) => acumulador + item);  // Somamos todos os valores para obter a soma total.
