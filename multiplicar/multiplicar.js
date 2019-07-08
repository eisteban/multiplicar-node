const fs = require('fs');

let listarTabla = (base, limite = 10) =>{

    return new Promise((resolve, reject) => {

        if (!Number(base)){
            reject(`El valor introducido '${base}' no es un número.`);
            return;
        }
        else if (!Number(limite)){
            reject(`El valor introducido '${limite}' no es un número.`);
            return;
        }

        let data = '';

        for ( let i =1; i <= limite; i++){

            data += `${base} * ${i}  =  ${base*i}\n`;
        }
        
        resolve(data);
    });

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)){
            reject(`El valor introducido '${base}' no es un número.`);
            return;
        }
        else if (!Number(limite)){
            reject(`El valor introducido '${limite}' no es un número.`);
            return;
        }

        let data = '';

        for ( let i =1; i <= limite; i++){

            data += `${base} * ${i}  =  ${base*i}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}-hasta-${limite}.txt`, data, (err) => {
          if (err) 
            reject(err)
          else
            resolve(`tabla-${base}-hasta-${limite}.txt`);
         
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla     
}

