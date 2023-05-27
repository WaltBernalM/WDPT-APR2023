// paquete y modulo son sinonimos en node
// ¿Como declaro que quiero usar un modulo? (en este caso chalk)
const chalk = require('chalk');
const http = require('http');


const server = http.createServer((request, response) => {
    // console.log(request.url);

    if(request.url === '/') {
        response.write('Hola, como estas cliente')
    } else if(request.url === '/mex') {
        response.write('Mex')
    } else {
        response.statusCode = 404;
        response.write('404 Page not Found')
    }

    response.end()
})

console.log(chalk.greenBright('Server is running!'))
// el host por defecto para correr un server tiene la siguiente ip 127.0.0.1
// localhost
// los puertos que usualemente se usan para correr servidores son los sig:
// 3000, 8080, 80
server.listen(3000)

