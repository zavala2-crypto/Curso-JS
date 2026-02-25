// Escreva uma funcao que recebe um numero e 
// retorne o seguinte:
// Numero e divisivel por 3 = Fizz
// Numero divisivel por 5 = Buzz
// Numero Nao e divisvelk por 3 e 5 = Retorne o proprio bunero
// Checar se o numero e realmente um numero
// Use a funcao com numeros de 0 a 100

 function Recebenumero(x) {
     //let texto;
     if(!x){
         return x;
    }
    if ( x % 3 == 0 && x % 5 == 0 ){
        return 'FizzBuzz'
    }

         if( x % 3 == 0) {
             return 'Fizz'
         } else if( x % 5 == 0){
             return 'Buzz'
         } else
            return 'Nao e divisivel por 3 e 5';
 }

for (let i = 0; i <= 100; i++){
    console.log(i, Recebenumero(i))
}