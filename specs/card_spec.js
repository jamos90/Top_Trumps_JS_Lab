const assert = require('assert');
const Card = require('../card.js');

describe('card', function (){

  let card1;
  let card2;
  let card3;
  let card4;
  let card5;
  let card6;

  beforeEach(function(){
    card1 = new Card('superman', 6, 9, 7);
    card2 = new Card('scarlet witch', 7, 10, 5);
    card3 = new Card('black widow', 8, 6, 9);
    card4 = new Card('The Flash',  7, 4, 10);
    card5 = new Card('Wonder Woman',  8, 7, 5);
    card6 = new Card('Batman',  10,  5, 6);
  });


  it('should have a name', function(){
    const result = card1.name;
    assert.strictEqual(result, 'superman')
  });
  it('should have intelligence', function(){
    const result = card1.intelligence;
    assert.strictEqual(result, 6)
  });
  it('should have strength', function(){
    const result = card1.strength;
    assert.strictEqual(result,9)
  });
  it('should have agility', function(){
    const result = card1.agility;
    assert.strictEqual(result,7)
  });
});
