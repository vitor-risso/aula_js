var agora = new Date()
var diaSem = agora.getDay() // dia da semana

/*
0- dom
1- seg
2- terc
.
.
.
6-sab
*/ 

switch(diaSem){

    case 0:
        console.log('Domnigo')
        break

        case 1:
            console.log('Segunda')
            break

        case 2:
            console.log('Terça')
            break

        case 3:
            console.log('Quarta')
            break

        case 4:
            console.log('Quinta')
            break

        case 5:
            console.log('Sexta')
            break

        case 6:
            console.log('Sábado')
            break
}           