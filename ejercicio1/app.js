// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

    const button = document.querySelector('.showme');
    console.log(button);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

    const title = document.querySelector('h1');
    title.textContent = "#pillado";

// 1.3 Usa querySelector para mostrar por consola todos los p

    const allParagraphs = document.querySelectorAll('p');
    allParagraphs.forEach(paragraph => console.log(paragraph));

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
    
const allPokemonElements = document.querySelectorAll('.pokemon');
allPokemonElements.forEach(element => console.log(element));

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

    const testMeElements = document.querySelectorAll('[data-function="testMe"]');
    testMeElements.forEach(element => console.log(element)); 
    
// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".

    const testElements = document.querySelectorAll('[data-function="testMe"]');
    if (testElements.length >= 3) {
    console.log(testElements[2]);
    } else {
    console.log('No hay suficientes elementos con el atributo data-function="testMe".');
    }