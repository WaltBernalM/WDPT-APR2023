const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


let bg = new Image();
bg.src = 'https://orig15.deviantart.net/8bed/f/2015/058/a/8/smb1_background_by_steamerthesteamtrain-d8jq7ea.png';


// vamos a crear un objeto llamado backgroundImage

const backgroundImage = {
    img: bg,
    x: 0,
    speed: -1,
    draw: function() {
        //Aca deseamos una función que mueva x pixeles a la izquierda a el background
        this.x--;
        // cuando la imagen se salga del canvas, inicializar la posicion en 0
    }
}

function updateCanvas() {
    // 1. Limpiar el canvas
    // 2. pintar el background en la nueva posicion
}

setInterval(updateCanvas, 1000/60)