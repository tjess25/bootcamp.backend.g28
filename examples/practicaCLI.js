//Practica realizada por Jherson Gallo

const fs = require('fs');

const nombreCommand = process.argv[2];
const nombreFile = process.argv[3];

// `./${nombreFile}` == "./"+nombreFile

const createDirectotyInit = (nombreFile)=>{
    fs.mkdir(`./${nombreFile}`, (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('Directory created successfully!');
        fs.writeFile(`./${nombreFile}/index.html`, '', (err) => {
            if (err) throw err;
            console.log('Archivo creado Satisfactoriamente');
        });
    });
}
const createDirectoty = (nombreFile)=>{
    fs.mkdir(`./${nombreFile}`, (err) => {
        if (err) {
            return console.error(err);
        }
    });
}

const createHtml = ()=>{
    fs.writeFile(`./${nombreFile}.html`, '', (err) => {
        if (err) throw err;
        console.log('Archivo creado Satisfactoriamente');
    });
}

const doesItExist = (type) =>{
    return new Promise((resolve, reject) => {
        fs.readdir(`.`,
    { withFileTypes: false },
    (err, files) => {
        console.log("\nCurrent directory files:");
        if (err) //{throw err}
           reject(err);
        else {
            files.forEach(file => {
                if(file === type){
                    resolve(true);
                }
            })
            resolve(false);
        }
    })
    }) 
}

const createJs = ()=>{
    if(!doesItExist('js')){
        createDirectoty('js')
        fs.writeFile(`./js/${nombreFile}.js`, '', (err) => {
            if (err) throw err;
            console.log('Archivo creado Satisfactoriamente');
        });
    }else{
        fs.writeFile(`./${nombreFile}.js`, '', (err) => {
            if (err) throw err;
            console.log('Archivo creado Satisfactoriamente');
        });
    }
}

const createCss = ()=>{
    if(!doesItExist('css')){
        createDirectoty('css')
        fs.writeFile(`./css/${nombreFile}.css`, '', (err) => {
            if (err) throw err;
            console.log('Archivo creado Satisfactoriamente');
        });
    }else{
        fs.writeFile(`./${nombreFile}.css`, '', (err) => {
            if (err) throw err;
            console.log('Archivo creado Satisfactoriamente');
        });
    }
}



switch(nombreCommand){
    case 'init':
        createDirectotyInit(nombreFile)
    break;
    case 'html': 
    createHtml(nombreFile)
    break;
    case 'js':
    createJs(nombreFile)
    break;
    case 'css':
    createCss(nombreFile)
}