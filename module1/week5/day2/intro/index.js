const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//
const ctx = canvas.getContext('2d');

// console.log(ctx);

// // se usa para colorear el relleno de las formas
// ctx.fillStyle = 'white';
// // se usa para colorear el contorno de las formas
// ctx.strokeStyle = 'blue';
// //           x    y  150  50
// //           👇   👇  👇   👇
// ctx.fillRect(50, 50, 350, 250);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;  
    canvas.height = window.innerHeight;
    // ctx.fillStyle = 'white';
    // ctx.fillRect(50, 50, 350, 250);

});

const mouse = {
    x: null,
    y: null
}

canvas.addEventListener('click', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
    drawCircle()
})
canvas.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
    drawCircle()
})

function drawCircle() {
    ctx.beginPath();
    // ctx.strokeStyle = 'green'; // !
    // ctx.lineWidth = 20;
    ctx.fillStyle = 'blue';
    ctx.arc(mouse.x, mouse.y, 30, 0, 2 * Math.PI);
    ctx.stroke();   // indica la accion de pintar el contorno (con los colores del strokeStyle)
    ctx.fill();     // indica la accion de pintar el relleno de la forma
    ctx.closePath();
}

drawCircle();