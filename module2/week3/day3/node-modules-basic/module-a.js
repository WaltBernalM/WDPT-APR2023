const greetingFromModuleA = 'Hola desde el modulo A';

const comment = `
    Recuerden que para node cada archivo .js es 
    un moduleo, el cual puede exportar tantas variables
    como funciones queramos.
`;

const PI = 3.8;


module.exports = {
    greetingFromModuleA,
    comment
};