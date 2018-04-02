function Deck() {
    this.cards = []
    let suits = ["s", "c", "h", "d"]
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, "t", "j", "q", "k"]
    for (var suit of suits) {
        for (var val of values) {
            let card = suit + val
            this.cards.push(card)
        }
    }
    console.log(this.cards)
    this.shuffle = function () {
        for (var i = 0; i < this.cards.length; i++) {
            var random = Math.round(Math.random() * (this.cards.length - 1))
            var temp = this.cards[i];
            this.cards[i] = this.cards[random]
            this.cards[random] = temp;
        }
    }
    this.deal = function () {
        var random = Math.round(Math.random() * (this.cards.length - 1))
        var card = this.cards[random]
        this.cards.splice(random, 1)
        return card;
    }
    this.readDeck = function () {
        for (var card of this.cards) {
            console.log(card)
        }
    }
}

function Player(name) {
    this.name = name;
    this.hand = []
}
Player.prototype.draw = function (deck) {
    var card = deck.deal()
    this.hand.push(card)
    return card;
}
Player.prototype.discard = function (idx) {
    if (idx >= this.hand.length) {
        console.log("You don't have that many cards!")
    }
    else {
        this.hand.splice(idx, 1)
    }
}
$(document).ready(function () {
    var deck = new Deck();
    var name = prompt("Please enter your name");
    var player = new Player(name)
    var dealer = new Player("Dealer")
    var playerScore = 0;
    var dealerScore = 0;
    var values = {'t': 10, 'j': 11, 'q' : 12, 'k' : 13}
    var dCard1;
    $("#deal").click(function () {
        for(var i =1; i <=2; i++){
            var pCard = player.draw(deck);
            if(parseInt(pCard[1])){
                playerScore += parseInt(pCard[1])
            }
            else{
                playerScore += values[pCard[1]]
            }
            $("#player").append(`<img src="images/${pCard}.png">`)            
        }
        document.getElementById("player-score").innerHTML = `${player.name}: ${playerScore}`;
        dCard1 = deck.deal();
        var dCard2 = deck.deal();
        if(parseInt(dCard2[1])){
            dealerScore += parseInt(dCard2[1])
        }
        else{
            dealerScore += values[dCard2[1]]
        }
        document.getElementById("dealer-score").innerHTML = `Dealer: ${dealerScore}`
        $("#dealer").append(`<img src="images/b1fv.png" data-alt="images/${dCard1}.png" id="hidden"><img src="images/${dCard2}.png">`)
        $(this).remove();
        $("#buttons").append(`<button id="hit">Hit</button><button id="stand">Stand</button>`)
    })
    $(document).on("click", "#hit", function(){
        let hCard = player.draw(deck)
        if(parseInt(hCard[1])){
            playerScore += parseInt(hCard[1])
        }
        else{
            playerScore += values[hCard[1]]
        }
        $("#player").append(`<img src="images/${hCard}.png">`)  
        document.getElementById("player-score").innerHTML = `${player.name}: ${playerScore}`;
        if(playerScore >= 21){
            $("#stand").click();
        }
    })
    $(document).on("click", "#stand", function(){
        console.log(dCard1)
        if(parseInt(dCard1[1])){
            dealerScore += parseInt(dCard1[1])
        }
        else{
            dealerScore += values[dCard1[1]]
        }
        document.getElementById("dealer-score").innerHTML = `Dealer: ${dealerScore}`
        var alt = $("#hidden").attr("data-alt")
        $("#hidden").attr("src", alt)
        if((dealerScore > 21 && playerScore > 21) || dealerScore == playerScore){
            document.getElementById("message").innerHTML  = "No winners here!"
        }
        else{
           if(dealerScore > playerScore){
               if(dealerScore <= 21){
                document.getElementById("message").innerHTML  = "Dealer wins"
               }
               else{
                document.getElementById("message").innerHTML  = "You win!"
               }
           }
           else{
               if(playerScore > 21){
                document.getElementById("message").innerHTML  = "Dealer wins"
               }
               else{
                document.getElementById("message").innerHTML  = "You win!"
               }
           }
        }
        $("#hit").remove();
        $("#stand").remove();
        $("#buttons").append("<a href=''><button>Reset</button></a>")
    })

})

