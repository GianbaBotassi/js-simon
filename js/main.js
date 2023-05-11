// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const arrayFiveRandomNum = [];

const play = document.getElementById('play');

const container = document.getElementById('container');

play.addEventListener('click',
    () =>{

        innerRandNum();

        setInterval(ciao,30000)


        function ciao(){
            container.innerHTML = "";
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
        if (!array.includes[newNumber]) {
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