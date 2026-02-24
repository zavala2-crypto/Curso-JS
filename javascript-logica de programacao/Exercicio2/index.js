var res = document.querySelector('.resultado')
const data = new Date()
 const diaSemana = data.getDay()
 const dia = data.getDate()
 const mes = data.getMonth()
 const ano = data.getFullYear()
 const houra = data.getHours()
 const min = data.getMinutes()

 switch (diaSemana) {
    case 0:
        console.log('Domingo')
        break;
    case 1:
        res.innerHTML += 'Segunda-feira, ' +dia+ ' de ' +mes+ ' de ' +ano+ '<br>' +houra+ ':' +min
        break;
    case 2:
        console.log('Terca-feira')
        break;
     case 3:
        console.log('Quarta-feira')
        break;
    case 4:
        console.log('Quinta-feira')
        break;
    case 5:
        console.log('Sexta-feira')
        break;
    case 6:
        console.log('Sabada')
        break;
        
    default:
        console.log('Dia Invalido!')
        break;
 }
 

    