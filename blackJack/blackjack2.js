let myCards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;

let startBtn = document.querySelector("#start-btn");
let newBtn = document.querySelector("#new-btn");
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEL = document.querySelector("#cards-el");


startBtn.addEventListener("click", function () {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    myCards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    render();
})

function render() {


    if (sum < 21) {
        message = "draw a new card";
    }
    else if (sum > 21) {
        message = "lost";
        isAlive = false;
    }
    else {
        message = "BlackJack!"
        hasBlackJack = true;
    }

    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    cardsEL.textContent = "Cards: ";

    for (let i = 0; i < myCards.length; i++){
        cardsEL.textContent += myCards[i] + " ";
    }

}

newBtn.addEventListener("click", function(){

    if(isAlive && hasBlackJack == false){
        let newCard = getRandomCard();
        sum += newCard;
        myCards.push(newCard);
        render();
    }
})

let player ={
    name: "Aadarsh",
    credits: 150
}

let creditEl = document.querySelector("#credit-el");
creditEl.textContent = player.name + ": $" + player.credits;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    }
}