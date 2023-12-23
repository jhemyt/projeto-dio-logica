let nameHero = 'Gamesh'
let xpHero = 6000;

switch(true) {
   case xpHero < 1000:
         console.log('O herói de nome ' + nameHero + ' está no nível de' + ' Ferro' )
             break;           
   case xpHero >= 1001 && xpHero <= 2000:
         console.log('O herói de nome ' + nameHero + ' está no nível de' + ' Bronze' ) 
             break; 
   case xpHero >= 2001 && xpHero <= 5000:
         console.log('O herói de nome ' + nameHero + ' está no nível de' + ' Prata' )
             break;
   case xpHero >= 5001 && xpHero <= 7000:
         console.log('O herói de nome ' + nameHero + ' está no nível de' + ' Ouro' )
             break;
   case xpHero >= 7001 && xpHero <= 8000:
         console.log('O herói de nome ' + nameHero + ' está no nível de' + ' Platina' )
             break;
    case xpHero >= 8001 && xpHero <= 9000:
           console.log('O herói de nome ' + nameHero + ' está no nível de' + ' Ascendente' )
             break;
     case xpHero >= 9001 && xpHero <= 10000:
          console.log('O herói de nome ' + nameHero + ' está no nível de' + ' Imortal' )
             break;
    case xpHero > 10001:
         console.log('O herói de nome ' + nameHero + ' está no nível de' + ' Radiante' )
}


