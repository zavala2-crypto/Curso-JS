// Capturar evento de submit do formulario
const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    Calcular()
});


function Calcular() {
    const res = document.querySelector('.resultado')
    const po = document.querySelector('#input-teste-1')
    const al = document.querySelector('#input-teste-2')
    const peso = Number(po.value)
    const altura = Number(al.value)

    if (!peso && !altura){
        res.innerHTML = 'INVALIDO'
        return;
    }
    
    const Alturaquadrado = altura * altura
    const IMC = (peso / Alturaquadrado)
    const nivel = resultado(IMC)

    res.innerHTML = 'O seu IMC e ' +IMC.toFixed(2)+ '(' +nivel+ ')'
}
function resultado (IMC){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
        if(IMC >= 39.9) return nivel[5]
        if(IMC >= 34.9) return nivel[4]
        if(IMC >= 29.9) return nivel[3]
        if(IMC >= 24.9) return nivel[2]
        if(IMC >= 18.5) return nivel[1]
        if(IMC < 18.5)  return nivel[0]
}