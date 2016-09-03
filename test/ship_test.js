var expect = require('chai').expect;

describe('checkForShip', function(){
  var checkForShip = require('../game_logic/ship_methods').checkForShip;

  it('should correctly report no ship at a given players coordinate', function(){

    player = {
      ships: [
        {
          locations: [[0,0]]
        }
      ]
    };

    expect(checkForShip(player, [9,9])).to.be.false;
  });

  it('should correctly report a ship at a given players coordinate', function(){

    player = {
      ships: [
        {
          locations: [[9,9]]
        }
      ]
    };

    expect(checkForShip(player, [9,9])).to.deep.equal(player.ships[0]);
  });

  it('should handle checking multiple ships', function(){

    player = {
      ships: [
        {
          locations: [[0,0],[0,1]]
        },
        {
          locations: [[1,0],[1,1]]
        },
        {
          locations: [[2,0],[2,1],[2,2],[2,3]]
        }
      ]
    };

    expect(checkForShip(player, [2,3])).to.deep.equal(player.ships[2]);
    expect(checkForShip(player, [0,1])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [0,0])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [1,0])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player, [1,1])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player, [9,9])).to.be.false;
  });
});

describe('damageShip',function(){
  var damageShip = require('../game_logic/ship_methods').damageShip;

  it('should register damage on a given ship at a given location', function(){
    var ship = {
      locations: [[0,0]],
      damage: []
    };

    damageShip(ship,[0,0]);

    expect(ship.damage).to.not.be.empty;
    expect(ship.damage[0]).to.deep.equal([0,0]);
  });
});

describe('attack', function(){
  var attack = require('../game_logic/ship_methods').attack;
  var checkForDamage = require('../game_logic/ship_methods').checkForDamage;

  it('should attack a ship at a location if present', function(){

    var player = {
      ships: [
        {
          locations: [[0,0],[0,1]],
          damage: []
        },
        {
          locations: [[1,0],[1,1]],
          damage: []
        },
        {
          locations: [[2,0],[2,1],[2,2],[2,3]],
          damage: []
        }
      ]
    };

    attack(player,[0,0])
    expect(player.ships[0].damage[0]).to.deep.equal([0,0]);
  });

  it('should not record damage is no ship present on attack', function(){

    var player = {
      ships: [
        {
          locations: [[0,0],[0,1]],
          damage: []
        }
      ]
    };

    attack(player,[9,9])
    expect(player.ships[0].damage[0]).to.be.empty;
    expect(checkForDamage(player,[9,9])).to.be.false;
  });
});
