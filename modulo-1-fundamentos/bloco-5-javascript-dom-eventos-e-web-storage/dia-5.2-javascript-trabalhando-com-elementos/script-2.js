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

// 3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const createSection = () => {
    const createSection = createElement('section');
    createSection.className = 'center-content';
    
    // 5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
    const createSection2 = createElement('section');
    createSection2.className = 'left-content';
    
    // 6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
    const createSection3 = createElement('section');
    createSection3.className = 'right-content';
     callTag('main').appendChild(createSection);
     callTag('main').appendChild(createSection2);
     callTag('main').appendChild(createSection3);
    //  console.log(callTag('main'));
}
    
// 4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const createParagraph = () => {
    const createParagraph = createElement('p');
    createParagraph.innerText = 'Texto do parágrafo filho da <section>';
    callTag('section').appendChild(createParagraph);
}
    
// 5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
// const createSection2 = () => {
//     const callClass = document.getElementsByClassName('main-content')[0];
//     const createSection = createElement('section');    
//     createSection.className = 'left-content';
//     callClass.appendChild(createSection);
// }

// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
const createImage = () => {
    const createImage = createElement('img');
    createImage.src = 'https://picsum.photos/200';
    createImage.className = 'small-image';
    callTag('section').appendChild(createImage);
}


// Function calls
// window.onload = 
createTitle();
createMain();
createSection();
createParagraph();
// createSection2();
createImage();

