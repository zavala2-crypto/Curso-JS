// Usar o valorde uma variavel que ainda nao existe pode utlizar 
// try- tente executar o que foi caso ocorra um erro e preciso que 
// cai em outo bloco catch 
// try{
//     console.log(naoExisto);
// } catch(err){
//     console.log('Naoexisto nao existe')
//   //  console.log(err)
// }

// function soma(x, y) {
//     if( typeof x !== 'number' || typeof y !== 'number'){
//     throw new ReferenceError('x e y precisam ser numero.')
//     }
//     return x + y
// }
// try{
//   console.log(soma(1, 2)); // E executada quando nao ha erros
//   console.log(soma('1', 2));
// } catch(error){
//     //console.log(error)
// console.log('Alguma coisa mais amigavel pro usuario') // E executado quando ha erros
// }

try {
    console.log(a)
    console.log('Eu estou aqui')
    
    
} catch (error) {
    console.log('Chegaste aqui')
} finally{
    console.log('Eu sempre sou executado')
}