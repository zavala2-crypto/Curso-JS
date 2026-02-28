const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefa = document.querySelector('.tarefa')

function criaLi(){
    const li = document.createElement('li')
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});
function limpaInput(){
    inputTarefa.value =  '';
    inputTarefa.focus();
}
 function criaBotaoApagar(li) {
    li.innerText += '';
    const BotaoApagar = document.createElement('button')
    BotaoApagar.innerText = 'Apagar'
    BotaoApagar.setAttribute('class', 'apagar')
    BotaoApagar.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(BotaoApagar)
 }
function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefa.appendChild(li);
    limpaInput();
    criaBotaoApagar(li)
}
 btnTarefa.addEventListener('click', function(e){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
 })

 document.addEventListener('click', function(e){
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove()
    }
 })

 function salvarTarefas() {
    const liTarefas = tarefa.querySelectorAll('li')
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
      let tarefaTexto = tarefa.innerText
      tarefaTexto = tarefaTexto.replace('Apagar' , '')
      listaDeTarefas.push(tarefaTexto);

    }
 }

 const tarefaJSON = JSON.stringify(listaDeTarefas);
 localStorage.setItem('tarefa', tarefaJSON );