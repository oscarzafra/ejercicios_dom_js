// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const newDiv = document.createElement('div');

const body = document.querySelector('body');

body.appendChild(newDiv);


// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const nuevoDiv = document.createElement('div');

const newP = document.createElement('p');

newP.textContent = "Este es un párrafo dentro de un div";

nuevoDiv.appendChild(newP);

const inBody = document.querySelector('body');

inBody.appendChild(nuevoDiv);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const addDiv = document.createElement('div');

for(let i = 1; i <= 6; i++) {
    const nuevoP = document.createElement('p');
    addDiv.appendChild(nuevoP);
}

const theBody = document.querySelector('body');

theBody.appendChild(addDiv);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const aBody = document.querySelector('Body');

const aP = document.createElement('p');

aP.textContent = 'Soy dinámico!';

aBody.appendChild(aP);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

constInsertH2 = document.querySelector('.fn-insert-here');
constInsertH2.innerText = 'Wubba Lubba dub dub';
document.body.appendChild(constInsertH2);

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array. 

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ulList = document.createElement('ul');

apps.forEach (function(app) {
    const liList = document.createElement('li');
    liList.innerText = app;
    ulList.appendChild(liList);
    document.body.appendChild(ulList);
})

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const elementsToRemove = document.querySelectorAll('.fn-remove-me');

elementsToRemove.forEach(function(element) {
    element.remove();
});

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const newParagraph = document.createElement('p');
newParagraph.textContent = 'Voy en medio!';

const firstDiv = document.querySelectorAll('div')[2];
const secondDiv = document.querySelectorAll('div')[3];

firstDiv.parentNode.insertBefore(newParagraph, secondDiv);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const divsToInsert = document.querySelectorAll('div.fn-insert-here');

divsToInsert.forEach(function(div) {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Voy dentro!';
    div.appendChild(newParagraph);
});
