const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


let background = new Image();
background.src = 'https://orig15.deviantart.net/8bed/f/2015/058/a/8/smb1_background_by_steamerthesteamtrain-d8jq7ea.png';


// vamos a crear un objeto llamado backgroundImage
const backgroundImage = {
    img: background,
    x: 0,
    speed: -1,
    draw: function() {
        // movemos la imagen a la izquierda, restandole a x 1px cada invocacion de draw()
        this.x--;
        // cuando la imagen 1 se salga del canvas, la ponemos denuevo dentro de el
        if(this.x < -canvas.width) {
            this.x= 0;
        }
        // pintamos la imagen que se sale
        ctx.drawImage(this.img, this.x, 0, canvas.width, canvas.height);
        // pintamos la posición de una segunda que va entrando conforme la primera se sale
        ctx.drawImage(this.img, this.x  + canvas.width, 0, canvas.width, canvas.height);
    }
}

// cuando creamos un objeto literal  (cuando abrimos y cerramos llaves y declaramos sus propiedades)
// se crea detras de escenas un this que apunta al objeto this = { img, x, speed, draw} y usamos this
// para hacer referencia a esas propiedades dentro del objeto

function updateCanvas() {
    // 1. Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // 2. pintar el background en la nueva posicion
    backgroundImage.draw();
    requestAnimationFrame(updateCanvas)
}

updateCanvas()
// setInterval(updateCanvas, 1000/60)

// requestAnimationFrame