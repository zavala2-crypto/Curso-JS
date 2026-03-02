// Declaracao de funcao fala

falaoi() // chamar a funcao

function falaoi() {
    console.log('Oie')
}

// As funcoes sao obejectos de primeira classe

const nome = function (){
    console.log('Sou um dado')
}
nome()

// function Arrow

const funcaoArrow = () => {
    console.log('Sou um arrow function');

}
funcaoArrow()