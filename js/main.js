// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Dichiaro un array vuoto per i numeri generati random
const arrayFiveRandomNum = [];

// Dichiaro un array vuoto per i numeri scelti dall'user
const arrayFiveUserNum = [];

// Associo bottone per cominciare partita
const elGame = document.getElementById('game');

// Associo div container per innerHTML
const container = document.getElementById('container');


let score = 0;

let numIndovinati = [];





elGame.addEventListener('click',
    () =>{

        innerRandNum();

        let clock = setInterval(ciao,10000)


        function ciao(){

            clearInterval(clock);

            container.innerHTML = "";


            // const ciao = createInputElement(5, container);

            for(let i = 0; i < arrayFiveRandomNum.length; i++){

                const numUser = parseInt(prompt("inserisci 5 numeri diversi tra loro"));
                arrayFiveUserNum.push(numUser);

            }

            console.log(arrayFiveUserNum);
            console.log(arrayFiveRandomNum);

            let i = 0; 

            while( i < arrayFiveUserNum.length){
                const numUser = arrayFiveUserNum[i];

                console.log(numUser);
                if (arrayFiveRandomNum.includes(numUser)) {

                    numIndovinati.push(numUser);

                    score++;
                    
                }
                i++
            }
            
            const stringNumbers = numIndovinati.toString();

            alert("hai totalizzato un punteggio di " + score + ". I numeri indovinati sono " + stringNumbers)
        }

    }
    )











/**************************************FUNCTIONS ******************************************/

// Math random function from min included to max included
function mathRandomMinMax(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate tot random numbers(not the same) in a range(min max) and push in array
function randomNumberArray(totNum, min, max, array){
    while(array.length < totNum){
        const newNumber = mathRandomMinMax(min, max);
        if (!array.includes(newNumber)) {
            array.push(newNumber);
        }
    }
}



function innerRandNum(){
    randomNumberArray(5, 1, 100, arrayFiveRandomNum);
    for(let i = 0; i < arrayFiveRandomNum.length; i++){
        container.innerHTML += `<div>${arrayFiveRandomNum[i]}</div>`
    }
}


// Function to create new tag element
function createInputElement(numElements, elemento){
    for(let i = 0; i < numElements; i++){
        const newElement = `<input type="text">`;
        elemento.innerHTML = newElement;
    }
 
}