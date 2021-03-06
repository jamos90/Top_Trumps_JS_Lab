const Player = require('./player.js')
const Game = function (players, deck){
  this.players = players;
  this.deck = deck;
  this.activeHands = [];
}

Game.prototype.deal = function (){
  if (this.deck.length %2 !==0){
    this.deck.pop();
  }
  for(let i = 0; i <this.deck.length; i++){
    if (i % 2 !== 0){
    this.players[0].cards.push(this.deck[i]);
   }
  else{
    this.players[1].cards.push(this.deck[i]);
   }
  }
}

Game.prototype.decideWinner = function (player) {
this.activeHands.push(chosenCard)
}

Game.prototype.selectCard = function (player){
  this.activeHands.push(player.cards.pop());
}

Game.prototype.getAttributeValue = function (attribute, index) {
  return this.activeHands[index][attribute]
};

Game.prototype.createActiveHands = function(player1, player2){
   this.selectCard(player1);
   this.selectCard(player2);
}

Game.prototype.playGame = function (player1, pChoice, player2){
  // 3 cards dealt to each
  this.deal();
  // Pop 1 card into activehands array for each player
  this.createActiveHands(player1,player2);

  if (this.getAttributeValue(pChoice, 0) > this.getAttributeValue(pChoice, 1)) {console.log("Player one wins this round");
  player1.cards.push(this.activeHands.pop());
  player1.cards.push(this.activeHands.pop());
}  else if (this.getAttributeValue(pChoice, 0) < this.getAttributeValue(pChoice, 1))
      { console.log("Player two wins");
      player2.cards.push(this.activeHands.pop());
      player2.cards.push(this.activeHands.pop());
    }
    else {
      player1.cards.push(this.activeHands.pop());
      player1.cards.push(this.activeHands.pop());

    }
  }

  // Game.prototype.

  // Game.prototype.playerWins = function(){
  //
  //   if
  // }


module.exports = Game;
