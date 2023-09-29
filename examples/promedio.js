const alumnos = {
	Juan: [10,5,8,9,7],
	Diana: [10,9,9,8,10],
	Roberto: [6,8,5,9,10]
}
 const nameInput = process.argv[2]


 if (alumnos.hasOwnProperty(nameInput)) {
    console.log((alumnos[nameInput].reduce((a,b) => a + b, 0)) / alumnos[nameInput].length)
 }
 else {
    console.log("El alumno no existe")
 }

