function checkForShip (player,coordinates){
  var shipPresent, ship;

  for (var i=0;i< player.ships.length;i++) {
    ship = player.ships[i];

    shipPresent = ship.locations.filter(function (actualCoordinate){
      return (actualCoordinate[0] === coordinates[0]) &&
      (actualCoordinate[1] === coordinates[1]);
    })[0];

    if (shipPresent) {
      return ship;
    }
  }
  return false;
}


function damageShip(ship, coordinates){
  ship.damage.push(coordinates);
}

function attack(player, coordinates) {
  var ship = checkForShip(player, coordinates);

  if (ship){
      damageShip(ship, coordinates);
    }
}

function checkForDamage(player, coordinates){
  var damagePresent, ship;

    for (var i=0;i< player.ships.length;i++) {
      ship = player.ships[i];

      damagePresent = ship.damage.filter(function (actualCoordinate){
        return (actualCoordinate[0] === coordinates[0]) &&
        (actualCoordinate[1] === coordinates[1]);
      })[0];

      if (damagePresent) {
        return true;
      }
    }
    return false;
  }


module.exports = {
  checkForShip: checkForShip,
  damageShip: damageShip,
  attack: attack,
  checkForDamage: checkForDamage
}
