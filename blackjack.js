
let cards=[]
let sum =0
let hasBlackjack=false
let isAlive=false 
let message=""
let messageEl = document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let player ={
    name:"Your cash",
    chips:120
}
let playerEl=document.getElementById("player-el")

playerEl.textContent =player.name+": $"+player.chips
 
function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13)+1

   switch(randomCard){
    case 1:randomCard=11
    break
    case 11:randomCard=10
    break
    case 12:randomCard=10
    break
    case 13:randomCard=10
    break
   }
    return randomCard
}

function startGame(){
    isAlive=true
    hasBlackjack=false
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum =firstCard+secondCard

    renderGame()
}

function renderGame(){
    cardsEl.textContent= "Cards: "

    for(let i=0;cards.length>i;i++)
    {
    cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent= "Sum: " +sum
    if(sum<=20){
        message = "Do you want to draw a new card?"
    }
    else if(sum===21){
        message = "Wohoo!you've got Blackjack!"
        hasBlackjack=true
    }
    else{
        message = "You're out of the game!"
        isAlive=false
    }

    if(hasBlackjack===true){
        player.chips+=1200
    }

    if(isAlive===false)
    {
        player.chips-=120
    }

    playerEl.textContent=player.name+": $"+player.chips
    
    messageEl.textContent=message
}

    function newCard(){
        if(isAlive === true && hasBlackjack === false)
        {
            let card=getRandomCard()
            sum += card
            cards.push(card)

            renderGame()
        }
        
    }
