const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


// ¿como elijo la fuente de la tipografia?
ctx.font = '35px Helvetica Nueu';
ctx.fillText('Soy un artista', 150, 50, 200);
ctx.strokeText('Constructivista', 140, 80);

// Como pintar lineas arbitrareas
ctx.beginPath();
ctx.moveTo(50, 370);
ctx.lineTo(600, 370);
ctx.lineTo(600, 250);
ctx.stroke();
ctx.closePath();


ctx.beginPath()
ctx.moveTo(450, 10)
ctx.lineTo(450, 110)
ctx.lineTo(550, 60)
ctx.lineTo(450, 10)
// ctx.stroke()
ctx.fill()
ctx.closePath()





