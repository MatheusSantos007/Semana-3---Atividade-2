// Lista de funcionários, onde cada um tem um nome, salário e departamento.
const funcionarios = [
    { nome: 'João', salario: 30000, departamento: 'TI' },
    { nome: 'Janete', salario: 70000, departamento: 'RH' },
    { nome: 'Sofia', salario: 100000, departamento: 'RH' },
   ];
   
   // Usamos "reduce" para agrupar os funcionários por departamento.
   const funcionariosPorDepartamento = funcionarios.reduce(
    (acumulador, funcionario) => {
      const departamento = funcionario.departamento;  // Pegamos o departamento do funcionário.
   
      // Se o departamento ainda não existe no acumulador, criamos uma lista vazia para ele.
      if (!acumulador[departamento]) {
        acumulador[departamento] = [];
      }
      
      // Adicionamos o funcionário na lista do departamento correspondente.
      acumulador[departamento].push(funcionario);
   
      return acumulador;  // Devolvemos o acumulador atualizado.
    },
    {},  // Começamos com um objeto vazio para armazenar os departamentos.
   );
   
   // Agora, calculamos a média salarial para cada departamento.
   const mediasSalarioPorDepartamento = Object.keys(funcionariosPorDepartamento).map((departamento) => {
    const total = funcionariosPorDepartamento[departamento].reduce(
      (acumulador, funcionario) => acumulador + funcionario.salario,
      0,
    );
    return {
      departamento: departamento,  // Nome do departamento
      media: total / funcionariosPorDepartamento[departamento].length,  // Média salarial calculada.
    };
   });
   
   // Filtramos a lista para mostrar apenas os departamentos onde a média salarial é maior que 65000.
   const maioresPagamentos = mediasSalarioPorDepartamento.filter(
    (departamento) => departamento.media > 65000,
   );
   