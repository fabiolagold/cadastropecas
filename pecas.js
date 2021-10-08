let peso = 100;

if (peso >100){
    console.log("A peca possui um peso adequado, pode ser cadastrada!")
} else{
    console.log("A peca nao pode ser cadastrada, possui o peso mínimo")
}

let listaPecas = ["disco de freio","amortecedor","virabrequim","vela","bateria","radiador","ignicao","correia","embreagem","pistao"
]
if(listaPecas.length<10){
    console.log("A lista ainda possui espaco para mais pecas.")
} else{
    console.log("nao ha espaco disponiveis na lista, a capacidade máxima foi atingida")
}

let nomePeca = "embreagem"

if (nomePeca.length>3){
    console.log("nome da peca é válido, pode seguir com o cadastro");
} else {
    console.log("nome de peca inválido, o nome deve ser mais de 3 caracteres")
} 