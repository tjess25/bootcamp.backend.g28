const products = [
    "iPhone 15",
    "Xbox series x",
    "Go pro 12",
    "Play Station 5",
    "TV 40 LG",
    "MateBook 14"
]

/*const getProducts = (err = true) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (err) reject(new Error ("ups"))
            resolve(products)
        }, 500);
    })
}

getProducts().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log("fin");
})*/

/*async function getProducts (err = false) { 
    return products
}

function resp() {
    async function prod() {
        let respProd = await getProducts()
        console.log(respProd);
    }
    prod()
}

resp()*/

const existDirAsync = async (dir) => {

    return new Promise((resolve, reject) => {
        fs.readdir(`.`,
            { withFileTypes: false },
            (err, files) => {
                console.log("\nCurrent directory files:");
                if (err) //{throw err}
                    reject(err)
                else {
                    files.forEach(file => {
                        if(file === dir){
                            resolve(true)
                        }
                    })
                    resolve(false);
                }
            })
    })
};







