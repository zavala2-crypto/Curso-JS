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

    if (peso.length == 0 && altura.length == 0){
        alert("Nao existe dado para calcular")
        po.focus();
        al.focus();
        return;
    }
    const Alturaquadrado = altura * altura
    const IMC = (peso / Alturaquadrado)

    res.innerHTML = IMC.toFixed(2)
}
