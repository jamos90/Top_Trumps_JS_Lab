const assert = require('assert');
const Player = require('../player.js');

describe('player', function (){

  let player1;
  let player2;

  beforeEach(function(){
    player1 = new Player("Bob");
    player2 = new Player("Terry");
  })

  it('should have a name', function(){
    const result = player1.name;
    assert.strictEqual(result,"Bob");
  });

  it('should start with no cards', function(){
    const result = player1.cards;
    assert.deepStrictEqual(result, []);
  });

});
