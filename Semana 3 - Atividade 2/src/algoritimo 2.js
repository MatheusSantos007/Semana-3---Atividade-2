// Definimos uma matriz de letras onde cada sublista representa um "grupo" ou "linha" de letras.
const letras = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
   ];
   
   // Primeiro, usamos "flat()" para transformar a matriz em uma lista única: ['a', 'b', 'c', 'c', 'd', 'f', 'd', 'f', 'g'].
   // Em seguida, usamos "reduce" para contar cada letra na lista.
   let resultado = letras.flat().reduce((objeto, letra) => {
    // Se a letra já existe no objeto, aumentamos o contador dela em 1.
    if (objeto[letra]) {
      objeto[letra] += 1;
    } else {
      // Se é a primeira vez que encontramos essa letra, começamos a contagem dela com 1.
      objeto[letra] = 1;
    }
    return objeto;  // Retornamos o objeto atualizado para o próximo passo do reduce.
   }, {});  // Começamos com um objeto vazio para armazenar as contagens de cada letra.
   