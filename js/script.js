// 1. L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// 2. Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// 3. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// const btn = document.querySelector('button');

// // Evento Bottone
// btn.addEventListener('click',function(){
//     // numero di quadrati
//     const squareNumber = 64;
//     // Griglia
//     const playground = document.getElementById('playground');
//     playground.innerHTML = ''
//     // Stampa dei Quadrati
//     for(let i = 0; i < squareNumber; i++){
//         let square = drawSquare(i,squareNumber);
//         console.log(square);
//         // Aggiungi il quadrato
//         playground.append(square);
//     }
// })

// // FUNCTION STAMPA DEI QUADRATI
// function drawSquare(squareI,squareNumber){
//     const squareWidth = Math.sqrt(squareNumber);
//     const square = document.createElement('div');
//     square.classList.add('square');
//     square.style.width = `calc(100% / ${squareWidth})`;
//     square.style.height = square.style.width;
//     square.innerHTML = squareI + 1;
//     // ACTIVE SUL CLICK AL QUADRATOO
//     square.addEventListener('click',function(){
//         square.classList.add('active');
//     });
//     return square;
// };
"use strict";

campoMinato();
function campoMinato(){
    const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    const level = document.getElementById('level').value;
    let numSquare = selectLevel(level);
    console.log(numSquare);
    const squareWidth = Math.sqrt(numSquare);
    const playground = document.getElementById('playground');
    playground.innerHTML = ' ';
    for(let i = 0; i < numSquare; i++){
        let square = drawSquare(i+1,squareWidth);
        playground.append(square);
    }
});

function drawSquare(content,squareWidth){
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${squareWidth})`;
    square.style.height = square.style.width;
    square.innerHTML = content;
    square.addEventListener('click', drawClick);
        return square;
};

function drawClick(){
    if(!this) return;
    this.classList.add('active');
    console.log(this.textContent);
}

function selectLevel(level){
    let numSquare; //(level === 'medium') ? 81 : (level === 'difficult') ? 49 : 100;
    switch(level){
        case 'medium':
            numSquare = 81;
            break;
        case 'difficult':
            numSquare = 49;
            break;
        default:
            numSquare = 100;
    }
    // console.log(numSquare);
    return numSquare;
};
};
