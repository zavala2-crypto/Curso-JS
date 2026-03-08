function CriaPessoa(nome, sobrenome) {
    return{
        nome, 
        sobrenome,
        fala(assunto) {
            return this.nome 'esta'  +assunto
        }
    };
}

const p1= CriaPessoa('Luiz', 'Oitavo');
console.log(p1)