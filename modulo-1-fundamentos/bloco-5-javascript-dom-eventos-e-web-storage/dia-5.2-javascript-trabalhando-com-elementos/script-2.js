// Função que chama uma tag
const callTag = (tag) => {
    return document.getElementsByTagName(tag)[0];
}

// Função que cria elemento
const createElement = (elemento) => {
    return document.createElement(elemento);
}

// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
const createTitle = () => {
//   const callBody = document.getElementsByTagName('body')[0];
  const createTitle = createElement('h1');
  createTitle.innerText = 'Exercício 5.2 - JavaScript DOM';
//   console.log(callBody);
  callTag('body').appendChild(createTitle);
}

// 2. Adicione a tag main com a classe main-content como filho da tag body;
const createMain = () => {
    const createMain = createElement('main');
    createMain.className = 'main-content';
    callTag('body').appendChild(createMain);
    // console.log(callTag('body'));
}

// Function calls
// window.onload = 
    createTitle();
    createMain();

