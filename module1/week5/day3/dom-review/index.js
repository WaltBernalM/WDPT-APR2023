// 1. ¿Como cambiamos el contenido del texto un tag html?
// 2. ¿Como creamos un nuevo elemento (tag) usando el DOM?
// 3. ¿Como agregamos un elemento creado con el DOM a otro elemento?
// 4. ¿Como creamos  elementos con una clase en particular?

const button = document.querySelector('#switch');
const p = document.getElementById('fruit');
const fruits = ['🍎', '🟠', '🍌'];

let fruitIndex = 0;
button.addEventListener('click', () => {
    p.innerText = fruits[fruitIndex]
    fruitIndex++;
    if(fruitIndex>=fruits.length) fruitIndex=0;
})


// quiero una funcion que reciba un array de nombres para inputs
// y construya un formulario con esos inputs
// ese form debe estar dentro de el tag main

const inputs = ['name', 'lastname'];

function createForm(inputs) {
    const main = document.querySelector('#main');
    // 2. creamos un elemento usando createElement
    const form = document.createElement('form');
    // 3. Añadimos un elemento dentro de otro usando  appendChild
    main.appendChild(form);
    // 4.
    inputs.forEach(inputName => {
        // const input = document.createElement('input');
        // input.setAttribute('placeholder', inputName);
        // input.setAttribute('class', 'form-group');
        // form.appendChild(input);
        form.innerHTML += `
         <label>${inputName}: </label>
         <input type="text" class="form-group" placeholder="${inputName}"/>
        `
    })
}

createForm(inputs);
