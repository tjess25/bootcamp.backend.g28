const fs = require('fs');

fs.writeFile('./test.txt', 'Hola', (err) => {
    if (err) throw err;
    console.log('Archivo creado Satisfactoriamente');
    fs.readFile('./test.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data + "1");
    });
});



/*fs.appendFile('./test.txt', ' Koders!', (err) => {
    if (err) throw err;
    console.log('Archivo editado Satisfactoriamente');
});*/

/*fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data + "2");
});*/

/*fs.readFile('./files/test.txt', 'utf8', (err, data) => {
    if (err) throw err;
    data = data + new Date()
    fs.writeFile('./files/test.txt', data.toString(), (err) => {
        if (err) throw err;
        console.log('Archivo creado Satisfactoriamente');
    });
});*/

/*fs.unlink('./test.txt', (err) => {
    if (err) throw err;
    console.log('Archivo Eliminado Satisfactoriamente');
});*/


/*** DIRECTORIOS ***/

/*fs.mkdir('./test', (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Directory created successfully!');
});*/

/*fs.rmdir('./test', {
    recursive: false,
}, (error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("No Recursive: Directories Deleted!");
    }
});*/

/*fs.readdir('./test',
    { withFileTypes: false },
    (err, files) => {
        console.log("\nCurrent directory files:");
        if (err) //{throw err} 
            console.log(err);
        else {
            files.forEach(file => {
                console.log(file);
            })
        }
    })*/
