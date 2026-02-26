const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefa = document.querySelector('.tarefa')

function criaLi(){
    const li = document.createElement('li')
    return li;
}
function limpaInput(){
    inputTarefa =  '';
    inputTarefa.focus();
}
 function criaBotaoApagar() {

    const BotaoApagar = document.createElement('button')
    BotaoApagar.innerText = 'Apagar'
 }
function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefa.appendChild(li);
}
 btnTarefa.addEventListener('click', function(e){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
 })