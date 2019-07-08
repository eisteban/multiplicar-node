const multiplicar = require('./multiplicar/multiplicar');

let argv = require('./config/yargs').argv;

let comando = argv._[0];

switch(comando){

    case 'listar':
        console.log('listar');
        multiplicar.listarTabla(argv.base, argv.limite)
            .then(data => console.log(data))
            .catch(err => console.log(err));
        break;
    case 'crear':
        multiplicar.crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err) );
        break;
    default:
        console.log('Comando no reconocido');
        break;

}



// console.log(argv.base);
// console.log("El límite es: " + argv.limite);

// console.log(argv);

// let argv = process.argv;
// let param = argv[2];
// let base = param.split('=')[1];
//console.log(base);

