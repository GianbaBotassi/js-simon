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

// Associo container per far comparire bottone send
const contBottomSend = document.getElementById('cont_bottom_send');

const elTimer = document.getElementById('clock');


let numIndovinati = [];

let numSbagliati = [];

let clock;

elGame.addEventListener('click',
    () =>{
        container.innerHTML = "";
        contBottomSend.innerHTML= "";

        innerRandNum();

        let time = 11;  

        clock = setInterval(addContNumb,1000)


        function addContNumb(){

            time--;
            elTimer.innerHTML = time;

            if(time === 0){
                clearInterval(clock);

                        elTimer.innerHTML = "";
                        container.innerHTML = "";
            
                        for(let i = 0; i < arrayFiveRandomNum.length; i++){
            
                            const newElement = document.createElement("input");
                            newElement.classList.add('square','text-center');
                            newElement.setAttribute("type", "text");
                            container.append(newElement);
                        }
            
                    
                        const btnSend = document.createElement("div");
                        btnSend.setAttribute("id","bottom_send");
                        btnSend.classList.add('btn','btn-secondary');
                        contBottomSend.append(btnSend);
                        btnSend.append('Invia numeri')
                        
            
                        // Associo container per far comparire bottone send
                        const sendResults = document.getElementById('bottom_send');
            
            
                        sendResults.addEventListener('click', 
                        function(){
                        for(let i = 0; i < 5; i++){
                            const inputNum = parseInt((document.getElementsByTagName("input")[i].value));
                            arrayFiveUserNum.push(inputNum)
                        }
            
                        let score = 0;
            
                        let i = 0; 
            
                        while( i < arrayFiveUserNum.length){
                            const numUser = arrayFiveUserNum[i];
            
                            if (arrayFiveRandomNum.includes(numUser)) {
            
                                numIndovinati.push(numUser);
                                
                                score++;
                                
                            }
                            i++
                        }
                        
                        const strNumCorretti = numIndovinati.toString();
            
                        sendResults.innerHTML= ""
            
                        const result = document.createElement("h2");
                        sendResults.append(result);
                        result.append(`Hai totalizzato un punteggio di ${score}. 
                        Numeri indovinati : ${strNumCorretti}.`)
            
                })
            }



            // 

            
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

        const numContainer = document.createElement('div');
        numContainer.classList.add('square');
        container.append(numContainer);
        numContainer.append(arrayFiveRandomNum[i]);

        // container.innerHTML += `<div>${arrayFiveRandomNum[i]}</div>`
    }
}


// Function to create new tag element
function createInputElement(numElements, elemento){
    for(let i = 0; i < numElements; i++){
        const newElement = `<input type="text">`;
        elemento.innerHTML = newElement;
    }
 
}