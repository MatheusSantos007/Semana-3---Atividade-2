// Lista de estudantes, onde cada um tem um nome e uma lista de notas.
const estudantes = [
    { nome: 'Alice', notas: [100, 60, 92] },
    { nome: 'João', notas: [75, 30, 85] },
    { nome: 'Charles', notas: [90, 95, 85] },
    { nome: 'Paulo', notas: [100, 100, 100] },
   ];
   
   // Usamos "map" para transformar cada estudante em um novo objeto contendo o nome e a média das notas.
   const estudantesMedias = estudantes.map((estudante) => {
    // Calculamos a soma de todas as notas do estudante.
    const total = estudante.notas.reduce((soma, nota) => soma + nota, 0);  // Adicionamos cada nota ao total.
   
    // Pegamos o nome do estudante para o objeto final.
    let { nome } = estudante;
   
    // Retornamos um novo objeto com o nome e a média das notas.
    return { nome, media: total / estudante.notas.length };
   });
   
   // Agora, filtramos a lista de estudantes para manter apenas aqueles com média maior que 90.
   const melhoresMedias = estudantesMedias.filter(
    (estudante) => estudante.media > 90,
   );
   