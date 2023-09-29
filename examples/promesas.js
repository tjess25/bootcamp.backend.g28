const products = [
    "iPhone 15",
    "Xbox series x",
    "Go pro 12",
    "Play Station 5",
    "TV 40 LG",
    "MateBook 14"
]

const getProducts = (err = true) => {
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
})





