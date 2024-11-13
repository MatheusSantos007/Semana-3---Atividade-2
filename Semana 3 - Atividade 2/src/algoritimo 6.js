// Lista de itens que queremos colocar na estrutura HTML.
const itens = ["Guarabira", "Belém", "Sapé"];

// Criamos uma estrutura de lista ordenada em HTML, onde cada item é exibido em uma linha.
const html = `<ol>\n${itens.map(item => `  <li>${item}</li>`).join('\n')}\n</ol>`;
console.log(html);  // Exibe a lista ordenada no formato HTML.
