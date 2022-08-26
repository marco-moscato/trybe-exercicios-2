/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com. */

const newEmployees = (justHired) => {
    const employees = {
      id1: justHired(), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  console.log(newEmployess('Pedro Guerra'));

  const justHired = (nomeCompleto) => {
    const cadastro = {
        name: nomeCompleto,
        email: (`${nomeCompleto.replace(' ', '_')}@trybe.com`).toLowerCase(),
    }
    return cadastro;
  }
  console.log(justHired('Pedro Guerra'));