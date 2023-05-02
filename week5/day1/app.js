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
    const todo = addForm.add.value;//.trim();
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

        console.log(e.target.classList)
    }
})

