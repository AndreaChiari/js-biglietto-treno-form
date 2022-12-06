console.log('JS OK')

/*
1) chiedo all'utente il numero di chilometri che vuole percorrere
2) chiedo all'utente l'eta'
3) definisco la variabile del costo di 0.21 euro al KM 
4) calcolo il costo totale del biglietto con il costo al KM
5) applico la variabile del 20% di sconto al prezzo se l'individuo e' minorenne
6) applico la variabile del 40% di sconto al prezzo se l'individuo e' maggiore di 65 anni
7) controllo in console il prezzo finale espresso in due decimali.
*/



//1) prendo gli elementi dalla pagina
const km = document.getElementById('km');
const age = document.getElementById('age');
const button = document.getElementById("button");
console.log('Km,button,age');


button.addEventListener('click', function () {
    
    const kmValue = (km.value * 0.21);
    const ageValue = age.value;
    console.log(kmValue,ageValue);

    if (ageValue < 18) {
        const minorAge= (kmValue * 0.8).toFixed(2);
        const targetElement = document.getElementById('finalResult');
        targetElement.innerText = ("il prezzo e' di " + minorAge + "€");
        console.log("il prezzo e' di " + minorAge + "€");
     }
     
     
     else if (ageValue > 65) {
         const overAge= (kmValue * 0.6).toFixed(2);
         const targetElement = document.getElementById('finalResult');
         targetElement.innerText = ("il prezzo e' di " + overAge + "€");
         console.log("il prezzo e' di " + overAge + "€");
     }
    
});








