const numero = prompt("Digite o numero")
var numerotitulo = document.getElementById('numero-titulo')
var texto = document.getElementById('texto')

numerotitulo.innerHTML = numero
texto.innerHTML += '<p>Raiz quadrada:' +(numero ** 0.5)+ '</p>'
texto.innerHTML += '<p>Numero ' +numero+ ' e inteiro : ' +(Number.isInteger(numero))+ ' </p>'
texto.innerHTML += '<p>Arredondando para baixo: ' +(Math.floor(numero))+ '</p>'
texto.innerHTML += '<p>Arredondando para cima: ' +(Math.ceil(numero))+'</p>'
texto.innerHTML += '<p>Com duas casas decimais: ' +(numero.toFixed(2))+ '</p>'