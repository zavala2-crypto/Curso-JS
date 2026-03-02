// return
// retorna valor
// termina funcao
// function CriaPessoa(nome, sobrenome){
//     return {nome, sobrenome};
// }
// const p1 = CriaPessoa('Alberto', 'Zavala')
// console.log(p1)
// const p2 = {
//     nome: 'Alberto',
//     sobrenome: 'Zavala'
// }
// console.log(p2) 

function criaMultiplicador(multiplicador){
    // multiplicador
    return function(n) {
        return n * multiplicador;
    };

}
// const duplica = criaMultiplicador(6)
// const triplica = criaMultiplicador(7)
// const quadriplica = criaMultiplicador(8)
// console.log(duplica(2))
// console.log(triplica(3))
// console.log(quadriplica(4))

const nome = 'Luiz' // Escopo Lexico

function falaNome(){
    const nome = 'Otavio';
    console.log(nome)
}
function usaFalaNome (){
    falaNome();
}
usaFalaNome();