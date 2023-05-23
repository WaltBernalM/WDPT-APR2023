const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const button = document.querySelector('button');


const image = new Image();
image.src = "https://i.gifer.com/ZDci.gif";





let x = 0;

function draw() {
    if(x === canvas.width - 150 ) x = 0;
    // clearRect limpia todo el canvas (todo!! lo que le indiquemos)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, x, 0, 150, 150);
    x++;
}


// button.onclick = () => {
//     setInterval(draw, 1000/60);
// }

button.addEventListener('click', () => {
    setInterval(draw, 1000/60);
})
