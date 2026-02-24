// For in -> le os indices ou chaves do objeto

// const frutas = ['Maca', 'Pera', 'Uva']
// for(let index in frutas){
//     console.log(frutas[index]);
// }
 const pessoa = {
     nome: 'Luiz',
     sobrenome: 'Otavio',
     idade: 30
 }
 console.log('####')
 for (let chave in pessoa){
     console.log(chave, pessoa[chave])
 }
   console.log('###')
 const frutas = ['Maca', 'Pera', 'Uva']
 for (let valores of frutas)
     console.log(valores)


//  For in -> Retorna o indice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteraveis, arrays ou strings)