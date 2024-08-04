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

const textH2 = document.querySelector('h2.fn-insert-here');

textH2.textContent = 'Wubba Lubba dub dub';

textH2.appendChild('h2.fn-insert-here');

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement('ul');

apps.forEach(app => {
    const li = document.createElement('li');
    li.textContent = app;
    ul.appendChild(li);
});

const bBody = document.querySelector('body');
body.appendChild(ul);