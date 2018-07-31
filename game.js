const Player = require('./player.js')
const Game = function (players, deck){
  this.players = players;
  this.deck = deck;
  this.activeHands = [];
}

Game.prototype.deal = function () {
  this.players[0].cards.push(this.deck[0]);
  this.players[1].cards.push(this.deck[1]);
  this.players[0].cards.push(this.deck[2]);
  this.players[1].cards.push(this.deck[3]);
  this.players[0].cards.push(this.deck[4]);
  this.players[1].cards.push(this.deck[5]);
};

Game.prototype.decideWinner = function (player) {
this.activeHands.push(chosenCard)
}

Game.prototype.selectCard = function (player){
  this.activeHands.push(player.cards.pop());
}

Game.prototype.getAttributeValue = function (attribute, index) {
  return this.activeHands[index][attribute]
};


Game.prototype.playGame = function (player1, p1Choice, player2){
  // 3 cards dealt to each
  this.deal();
  // Pop 1 card into activehands array for each player
  this.selectCard(player1);
  this.selectCard(player2);

  if (this.getAttributeValue(p1Choice, 0) > this.getAttributeValue(p1Choice, 1)) {console.log("Player one wins this round");
  player1.cards.push(this.activeHands.pop());
  player1.cards.push(this.activeHands.pop());
}  else if (this.getAttributeValue(p1Choice, 0) < this.getAttributeValue(p1Choice, 1))
      { console.log("Player two wins");
      player2.cards.push(this.activeHands.pop());
      player2.cards.push(this.activeHands.pop());
    }
    else {
      player1.cards.push(this.activeHands.pop());
      player1.cards.push(this.activeHands.pop());

    }

  }

  // Game.prototype.playerWins = function(){
  //
  //   if
  // }


module.exports = Game;
