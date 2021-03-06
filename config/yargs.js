const opts = {
    base: {
        demand: true,
        alias: 'b',
        description: 'Numero base para la tabla de multiplicar'
    },
    limite: {
        demand: false,
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo de texto que contiene la tabla de multiplicar', opts)
    .help()
    .argv;

    module.exports = {

        argv

    }
