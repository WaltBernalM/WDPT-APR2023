// console.log('Hello, World!');
// const fileSystem = require('fs');
// fileSystem.copyFileSync('f1.txt', 'f2.txt');

// function sum(a,b) {return a+ b}

// en node el concepto de modulo es muy importante
// un archivo es un modulo por si mismo
// un conjunto de archivos tambien hacen a un modulo

// import chalk from 'chalk';
const chalk = require('chalk');

console.log(chalk.blue('A'), chalk.redBright('perro!'), chalk.yellow('texto en colorcitos!'));

console.log(chalk.blue.bgRed.bold('Hello world!'));

console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

