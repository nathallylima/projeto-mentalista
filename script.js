var numeroSecreto = parseInt(Math.random() * 1001 - 1) + 1;
alert('Seja bem-vindo! Nesse jogo o objetivo é adivinhar o número secreto que está entre 1 e 1000. Você terá 10 tentativas, boa sorte!');
var tentativas = 0


while(chute != numeroSecreto){
  
  var tentativasMax = 10;
  
  tentativas = tentativas + 1;

  var chute = prompt(tentativas + 'ª tentativa. Digite abaixo um número entre 1 e 1000');
  
  if(chute == null){
    break
  }
  
  var total = tentativasMax - tentativas;
  
   if(chute == numeroSecreto) {
    alert('Parabéns, você acertou! :)');
     break
  }
  
   if(tentativas == 10){
   alert('GAME OVER! Suas tentativas acabaram :(. O número secreto era ' + numeroSecreto);
     break
   }
  
  else if (chute > numeroSecreto) {
    alert('Você errou. O número secreto é menor que ' + chute + '. Restam ' + total + ' tentativas.' );
  }

 else  if (chute < numeroSecreto) {
    alert('Você errou. O número secreto é maior que ' + chute + '. Restam ' + total + ' tentativas.' );
  }
 }