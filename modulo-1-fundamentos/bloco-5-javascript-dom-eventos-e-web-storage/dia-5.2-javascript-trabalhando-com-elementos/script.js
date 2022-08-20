// PARTE 1
// 1. Acesse o elemento elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta');

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.getElementById('elementoOndeVoceEsta').parentElement.style.background = 'red';

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.getElementById('primeiroFilhoDoFilho').innerText = 'Primeiro filho do filho';

// 4. Acesse o primeiroFilho a partir de pai.
document.getElementById('pai').firstElementChild;

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').previousElementSibling;

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').nextSibling;

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
document.getElementById ('elementoOndeVoceEsta').nextElementSibling;

// 8. Agora acesse o terceiroFilho a partir de pai.
document.getElementById('pai').children[2];

// PARTE 2
// 1. Crie um irmão para elementoOndeVoceEsta.
const pai = document.getElementById('pai');
const criaFilho = document.createElement('section');
const filho = criaFilho.className = 'irmaoElementoOndeVoceEsta';
pai.appendChild(criaFilho);
console.log(pai);

// 2. Crie um filho para elementoOndeVoceEsta.
const pai2 = document.getElementById('elementoOndeVoceEsta');
const filho2 = criaFilho.className = 'filhoElementoOndeVoceEsta';
pai2.appendChild(criaFilho);
console.log(pai2);
