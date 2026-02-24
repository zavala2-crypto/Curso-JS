var res = document.querySelector('.resultado')
const data = new Date()
//  const dia = data.getDate()
//  const ano = data.getFullYear()
//  const houra = data.getHours()
//  const min = data.getMinutes()


function getDiadasemana(diaSemana) {
    let texto;

 switch (diaSemana) {
    case 0:
        texto ='Domingo'
        break;
    case 1:
       texto = 'Segunda-feira'
        break;
    case 2:
        texto ='Terca-feira'
        break;
     case 3:
        texto ='Quarta-feira'
        break;
    case 4:
        texto ='Quinta-feira'
        break;
    case 5:
        texto ='Sexta-feira'
        break;
    case 6:
        texto ='Sabada'
        break;
        
    default:
        texto = 'Dia Invalido!'
        break;
 }
 return texto;
}


function getmes(mes) {
    let mesAno;
 switch (mes) {
    case 0:
        mesAno = 'Janeiro'
        break;
     case 1:
        mesAno = 'Fevereiro'
        break;
    case 2:
        mesAno = 'Marco'
        break;
    case 3:
        mesAno = 'Abril'
        break;
    case 4:
        mesAno = 'Maio'
        break;
    case 5:
        mesAno = 'Junho'
        break;
    case 6:
        mesAno = 'Julho'
        break;
    case 7:
        mesAno = 'Agosto'
        break;
    case 8:
        mesAno = 'Setembro'
        break;
    case  9:
        mesAno = 'Outubro'
        break;
    case 10:
        mesAno = 'Novembro'
        break;
     case 11:
        mesAno = 'Dezembro'
        break;
    default:
        mesAno = 'INVALIDO'
        break;
        
}
return mesAno;
}

function criaDados(data) {

    const diaSemana = data.getDay();
    const mes = data.getMonth();

    const adia = getDiadasemana(diaSemana);
    const sem =  getmes(mes);
    return adia+ ', ' +data.getDate()+ ' de ' +sem+ ' de ' +data.getFullYear()+ '<br>' +data.getHours()+ ':' +data.getMinutes()
}
res.innerHTML = criaDados(data)
    