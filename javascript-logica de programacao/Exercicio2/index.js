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
        
        break;
 
    default:
        break;
 }
 res.innerHTML += diaSemana+ ', ' +dia+ ' de ' +mes+ ' de ' +ano+ '<br>' +houra+ ':' +min

    