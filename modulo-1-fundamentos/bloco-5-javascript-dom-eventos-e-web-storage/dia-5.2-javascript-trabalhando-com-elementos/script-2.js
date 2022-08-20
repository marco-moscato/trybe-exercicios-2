// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
const createTitle = () => {
  const callBody = document.getElementsByTagName('body')[0];
  const createElement = document.createElement('h1');
  createElement.innerText = 'Exercício 5.2 - JavaScript DOM';
  console.log(callBody);
  callBody.appendChild(createElement);
}


// Function calls
createTitle();
