var idade =10

if (idade < 16){
    console.log(`Não vota`)

} else {
    if ( idade <18){  // n é necessario o idade >= 16
    console.log (`Voto opcional`)
    } else {if(idade >18){
        console.log('Voto obrigatório')
     }
    }

}