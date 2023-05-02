const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

// DOM events

//

// addForm.onsubmit = (e) => {

// }
console.log('list.innerHTML: ', list.innerHTML);

const generateTemplateItem = todo => {
    const itemHtml = `
      <li class="list-group-item">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `;
    // innerHTML es una propiedad del DOM
    // que nos da el contenido de un tag de HTML
    // como string
    list.innerHTML += itemHtml;
}

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Nota: addForm.add.value es la version corta de:
    // addForm.elements.add.value
    // elements (https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements#examples)
    // nos da todos los form controls que hay dentro del form
    // y podemos acceder usando el "name" del elemento (add en nuestro caso)
    // const todo = addForm.add.value;//.trim();
    const todo = addForm.elements.add.value;//.trim();
    generateTemplateItem(todo);
    addForm.reset(); // reset limpia todos los imputs de un form

});


// list.onclick = e => {}
list.addEventListener('click', e => {
    // esta linea indica que el evento fue generado por
    // el bote de basura
    if(e.target.classList.contains('delete')) {
        // e.target nos da el elemento que genero el evento
        // 👇
        e.target.parentElement.remove();
      //              👆
      // tomamos al padre porque es el elemento que debemos eliminar
        console.log(e.target.classList)
    }
})

