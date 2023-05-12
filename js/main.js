// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Dichiaro un array vuoto per i numeri generati random
const arrayFiveRandomNum = [];

// Dichiaro un array vuoto per i numeri scelti dall'user
const arrayFiveUserNum = [];

// Assegno bottone Gioca per cominciare partita
const elGame = document.getElementById('game');

// Assegno variabile a elemento container numeri nel DOM
const elContainer = document.getElementById('container');

// Assegno variabile a elemento contenitore bottone nel DOM
const elContBottomSend = document.getElementById('cont_bottom_send');

// Assegno variabile a elemento clock nel DOM
const elTimer = document.getElementById('clock');

// Dichiaro array numeri indovinati
let numIndovinati = [];

// Dichiaro array numeri sbagliati
let numSbagliati = [];

// Creo funzione al click del bottone Play
elGame.addEventListener('click',
    () =>{
        elContainer.innerHTML = "";
        elContBottomSend.innerHTML= "";

        // Funzione per la creazione di numeri random, li sposto in array
        randomNumberArray(5, 1, 100, arrayFiveRandomNum);

        // Creo degli elementi nel DOM con all'interno i numeri creati random
        for(let i = 0; i < arrayFiveRandomNum.length; i++){
    
            const numContainer = document.createElement('div');
            numContainer.classList.add('square');
            elContainer.append(numContainer);
            numContainer.append(arrayFiveRandomNum[i]);
            }
    

        // Setto timer con secondi a disposizione per giocare prima che spariscano numeri
        let timer = 2;  

        // Creo set interval, ogni 1000 ms si abbassa il timer
        let clock = setInterval(addContNumb,1000)


        function addContNumb(){

            timer--;
            elTimer.innerHTML = timer;

            // Quando il timer raggiunge lo 0 si attiva la condizione
            if(timer === 0){

                // Termino il setInterval
                clearInterval(clock);

                        // Azzero i container HTML
                        elTimer.innerHTML = "";
                        elContainer.innerHTML = "";
            
                        // Genero 5 elementi input in DOM
                        for(let i = 0; i < arrayFiveRandomNum.length; i++){
            
                            const newElement = document.createElement("input");
                            newElement.classList.add('square','text-center');
                            newElement.setAttribute("type", "text");
                            elContainer.append(newElement);
                        }
            
                        // Genero bottone da utilizzare per inviare numeri da indovinare
                        const elBtnSend = document.createElement("div");
                        elBtnSend.setAttribute("id","bottom_send");
                        elBtnSend.classList.add('btn','btn-secondary');
                        elContBottomSend.append(elBtnSend);
                        elBtnSend.append('Invia numeri')
            
                        // Genero event listener sul bottone creato
                        elBtnSend.addEventListener('click', 
                        function(){
                        for(let i = 0; i < 5; i++){
                            userNum = parseInt((document.getElementsByTagName("input")[i].value));
                            arrayFiveUserNum.push(userNum);
                        }
            
                        // Dichiaro e assegno uno score a 0
                        let score = 0;
            
                        // Dichiaro e assegno variabile a elementi con classe square (si crea Array)
                        const inputNumUser = document.getElementsByClassName("square");

                        // Ciclo con while per verificare se numeri inseriti coincidono con numeri random
                        let i = 0; 
            
                        while( i < arrayFiveUserNum.length){
                            const numUser = arrayFiveUserNum[i];
            
                            if (arrayFiveRandomNum.includes(numUser)) {
            
                                numIndovinati.push(numUser);
                                
                                // Se numero coincide viene data classe right(bg-green)
                                inputNumUser[i].classList.add('positive');

                                // Si incrementa di 1 lo score
                                score++;
                                
                            } else{ // Se numero non coincide viene data classe wrong (bg-red)
                                inputNumUser[i].classList.add('negative');
                            }

                            i++
                        }
                        
                        // Azzero il bottone per l'invio numeri
                        elBtnSend.innerHTML= ""
            
                        // Genero nuovo messaggio da appendere al DOM con risultato
                        const result = document.createElement("h2");
                        elBtnSend.append(result);
                        result.append(`Hai totalizzato ${score} punti.`)
                })
            }

        }
    }
    )

/**************************************Funzioni specifiche per progetto ******************************************/



/**************************************GENERAL FUNCTIONS ******************************************/

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

// Function to create new tag element
function createInputElement(numElements, elemento){
    for(let i = 0; i < numElements; i++){
        const newElement = `<input type="text">`;
        elemento.innerHTML = newElement;
    }
 
}