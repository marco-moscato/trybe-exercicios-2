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
const filho = criaFilho.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(criaFilho);
// console.log(pai);

// 2. Crie um filho para elementoOndeVoceEsta.
const pai2 = document.getElementById('elementoOndeVoceEsta');
const criaFilho2 = document.createElement('section');
const filho2 = criaFilho2.id = 'filhoElementoOndeVoceEsta';
pai2.appendChild(criaFilho2);
// console.log(pai2);

// 3. Crie um filho para primeiroFilhoDoFilho.
const pai3 = document.getElementById('primeiroFilhoDoFilho');
const criaFilho3 = document.createElement('section');
const filho3 = criaFilho3.id = 'filhoDoPrimeiroFilhoDoFilho';
pai3.appendChild(criaFilho3);
// console.log(pai3);

// 4. A partir desse filho criado, acesse terceiroFilho.
document.getElementById('filhoDoPrimeiroFilhoDoFilho').parentElement.parentElement.nextElementSibling;

// PARTE 3
// 5. Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
const pai4 = document.getElementById('pai');
indicesARemover = [0, 2, 3, 4];
for (let i = 0; i < indicesARemover.length; i += 1) {
    pai4.removeChild(pai4.children[i]);
}
console.log(pai4);

