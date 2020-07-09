var num = [5,8,6,6,3,21,4,7,8,6,3,2,1,48,]

for(var i = 0; i<num.length; i++){
    console.log(num[i])
}

//ou 

for(let i in num){
    console.log(`vo valor ${i} vale ${num[i]}`)
}

//num.length mostra o tamanho do vetor ou seja quantos elementos ele tem  


//{var}.index0f(numero) -> procura um determinado valor dentro do vetor e infroma sua posição

let pos = num.indexOf(21)
console.log(pos) 

// se o valor retornado for -1 o valor nao foi encontrado 


//{var}.sort -> coloca o vetor em ordem crscente