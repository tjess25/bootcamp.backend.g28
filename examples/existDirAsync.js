const fs = require('fs');

const existDirAsync = (dir) => {
    return new Promise((resolve, reject) => {
        fs.readdir(`.`,
            { withFileTypes: false },
            (err, files) => {
                console.log("\nCurrent directory files:");
                if (err) reject(err)
                else {
                    files.forEach(file => {
                        if (file === dir) {
                            resolve(true)
                        }
                    })
                    resolve(false);
                }
            })
    })
};

existDirAsync('js').then((exist) => {
    console.log(exist ? "el directorio ya existe" : "el directorio no existe");
}).catch((err) => {
    console.log(err);
})