"use strict";

 const score0 = document.querySelector("#score--0");
 const score1 = document.querySelector("#score--1");
 const diceEl =  document.querySelector(".dice");
 const btnNew = document.querySelector(".btn--new");
 const btnRoll = document.querySelector(".btn--roll");
 const btnHold = document.querySelector(".btn--hold");
 const current0El = document.querySelector("#current--0");
 const current1El = document.querySelector("#current--1");
 const player0El1 = document.querySelector(".player--0");
 const player0El2 = document.querySelector(".player--1");


 let scores, currentScore , activePlayer;
 const init = function(){
   scores = [0,0];
   score0.innerHTML = 0;
   score1.innerHTML = 0;
   currentScore = 0 ;
   activePlayer = 0 ;

   score0.innerHTML = 0;
   score1.innerHTML = 0;
   current0El.innerHTML = 0;
   current1El.innerHTML = 0;

   diceEl.classList.add("hidden");
   player0El1.classList.remove('player--winner');
   player0El2.classList.remove('player--winner');
   player0El1.classList.add('player--active');
   player0El2.classList.remove('player--active');

 }
 init();

 const switchPlayer = function(){
    document.querySelector(`#current--${activePlayer}`).innerHTML= 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El1.classList.toggle("player--active");
    player0El2.classList.toggle("player--active");
 } 

 btnRoll.addEventListener('click',function(){
    const dice = Math.trunc( Math.random()*6)+1;
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`

    if(dice!==1){
        currentScore += dice;
        document.querySelector(`#current--${activePlayer}`).innerHTML= currentScore;
        current0El.innerHTML = currentScore ;
    }else{
        switchPlayer();
    }

 })
 btnHold.addEventListener('click',function(){
   console.log("clicked");
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).innerHTML= scores[activePlayer];
    if (scores[activePlayer]>=100){
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
      btnRoll.disabled = true;
      btnHold.disabled = true;
    }else{
      switchPlayer();
    }
 })

 btnNew.addEventListener('click', function(){
   init();
   btnRoll.disabled = false;
   btnHold.disabled = false;
 })

