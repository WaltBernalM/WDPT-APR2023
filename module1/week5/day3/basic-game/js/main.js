const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let requestId;
let gameFrames = 0; // reloj interno del juego
let gravity = 8.9;
let points = 0;
const obstacles = [];


// funcion para limpiar el canvas

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


// funcion para animar a flash corriendo

function flashAnimation() {
    // cada 5 cuadros vamos a repetir la animacion de flash
    if(gameFrames % 20 === 0) {
        if(flash.animate === 3) {
            flash.animate = 0;
        } else {
            flash.animate++;
        }
    }
}


function checkCollisions() {
    if(flash.x <= 0) {
        flash.x = canvas.width - flash.width;
    } else if (flash.x > canvas.width) {
        flash.x = 0;
    }

    obstacles.forEach((ice, i) => {
        if(flash.isTouching(ice)) {
            obstacles.splice(i, 1);
            flash.hp--;
        }
        points += 0.5;
    })
}


function gameOver() {
    if(flash.hp === 0) {
        requestId = cancelAnimationFrame(requestId);
        ctx.font = '50px Arial';
        ctx.fillStyle = 'red';
        ctx.fillText('Game Over', canvas.width / 2, canvas.height/2);
    }
}

function drawInfo() {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText(`Points: ${points}`, 300, 30);
    ctx.fillText(`Flash lives: ${flash.hp}`, 50, 30);
}

function generateIce() {
    if(gameFrames % 100 === 0) {
        const randomPosition = Math.floor(Math.random() * canvas.height) - 50;
        const ice = new Ice(randomPosition);
        obstacles.push(ice);
    }
}

function drawObstacles() {
    obstacles.forEach(ice => ice.draw())
}

// updateGame  es el game engine
function updateGame() {
    gameFrames++;
    console.log('gameFrames',gameFrames);
    clearCanvas();
    background.draw();
    flashAnimation();
    flash.draw();
    flash.x += flash.vx; 
    flash.y += flash.vy; 
    flash.y += gravity;
    checkCollisions();
    generateIce();
    drawObstacles();
    drawInfo(); 
    gameOver();
    if(requestId) {
        requestAnimationFrame(updateGame)
    } 
}


function startGame() {
    if(!requestId) {
        requestId = requestAnimationFrame(updateGame)
        console.log('requestId',requestId);
    }
}

window.onload = () => {
    startGame();
}



// Posibles mejoras

// Eliminar los hielos una vez que salieron de la pantalla
// Agregar sonido para las colisiones y musica de fondo


