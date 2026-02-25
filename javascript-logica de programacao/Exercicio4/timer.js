function criaHorasDosSegundos(segundos){
    const data = new Date(segundos * 1000);
     return data.toLocaleTimeString('pt-PT',{
        hour12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciarRelogio(){
    timer = setInterval(function(){
        segundos ++;
        relogio.innerHTML = criaHorasDosSegundos(segundos);
    }, 1000)
}
// Adicionar o evento clic

iniciar.addEventListener('click', function(event){
    clearInterval(timer);
    iniciarRelogio();
})

pausar.addEventListener('click', function(event){
    clearInterval(timer);
})

zerar.addEventListener('click', function(event){
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      segundos = 0;
})