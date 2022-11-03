var carro = {
    "marca":"FIAT",
    "modelo": "500e",
    "consumo": "1km/0,5",
    "cor": "rose gold",
    "problemas": [{
        "descrição" : "perfeito, sem defeitos",
        "custo": 40000
    },
    {
        "descrição" : "pneus",
        "custo": 600
    }]
}

console.log("Carros", carro)

console.log("Problema", carro.problemas[1])
console.log("Custo do Problema", carro.problemas[1].custo)

for(let prop in carro){
    console.log(prop + ":" + carro[prop])
}