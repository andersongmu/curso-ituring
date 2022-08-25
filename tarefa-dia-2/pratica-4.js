let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

if (produtoA.internacional == true) {

    let valorImpostos = produtoA.valor * 1.2
    console.log("Camiseta")
    console.log("O produto é internacional")
    console.log("Valor total (com impostos): ", valorImpostos)

} else {
    let valorImpostos = produtoA.valor * 1.12
    console.log("Camiseta")
    console.log("O produto é nacional")
    console.log("Valor total (com impostos): ", valorImpostos)   
}


if (produtoB.internacional == true) {

    let valorImpostos = produtoB.valor * 1.2
    console.log("Perfume")
    console.log("O produto é internacional")
    console.log("Valor total (com impostos): ", valorImpostos)

} else {
    let valorImpostos = produtoB.valor * 1.12
    console.log("Perfume")
    console.log("O produto é nacional")
    console.log("Valor total (com impostos): ", valorImpostos)   
}


if (produtoC.internacional == true) {

    let valorImpostos = produtoC.valor * 1.2
    console.log("Sandália")
    console.log("O produto é internacional")
    console.log("Valor total (com impostos): ", valorImpostos)

} else {
    let valorImpostos = produtoC.valor * 1.12
    console.log("Sandália")
    console.log("O produto é nacional")
    console.log("Valor total (com impostos): ", valorImpostos)   
}