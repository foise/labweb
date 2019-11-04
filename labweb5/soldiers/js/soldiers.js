function beginWar() {
  var soldier1 = {
    name: 'Soldier1',
    health: 100,
    currentCoordinates: {
      x: 40,
      y: 20
    },
    shot: function (shotX, shotY) {
      console.log('Soldier1 shoots!!');
      console.log(shotX, shotY);
    },
    spawn: function (spawnX, spawnY) {
      this.currentCoordinates.x = spawnX;
      this.currentCoordinates.y = spawnY;
      console.log('Soldier1 spawns!');
      console.log(this.currentCoordinates.x, this.currentCoordinates.y);
    },
    gotShot: function () {
      this.health = this.health - 25;
      console.log('Soldier2 got shot!');
      if (this.health === 0) {
        console.log('Soldier1 is dead!!');
      }
    }
  };

  var soldier2 = {
    name: 'Soldier2',
    health: 100,
    currentCoordinates: {
      x: 20,
      y: 20
    },
    shot: function (shotX, shotY) {
      console.log('Soldier2 shoots!!');
      console.log(shotX, shotY);
    },
    spawn: function (spawnX, spawnY) {
      this.currentCoordinates.x = spawnX;
      this.currentCoordinates.y = spawnY;
      console.log('Soldier2 spawns!');
      console.log(this.currentCoordinates.x, this.currentCoordinates.y);
    },
    gotShot: function () {
      this.health = this.health - 25;
      console.log('Soldier2 got shot!');
      if (this.health === 0) {
        console.log('Soldier2 is dead!!!')
      }
    }
  };
  var spawnX1 = Math.floor(Math.random() * 100);
  var spawnY1 = Math.floor(Math.random() * 100);

  var spawnX2 = Math.floor(Math.random() * 100);
  var spawnY2 = Math.floor(Math.random() * 100);

  if (spawnX1 != spawnX2 && spawnY1 != spawnY2) {
    soldier1.spawn(spawnX1, spawnY1);
    soldier2.spawn(spawnX2, spawnY2);
  } else {
    console.log('Spawn fail!');
    return 0;
  }
  setInterval(function () {
    if (death === 0) {
      // var shotX1 = Math.floor(Math.random() * 100);
      // var shotY1 = Math.floor(Math.random() * 100);
      var shotX1 = spawnX2;
      var shotY1 = spawnY2;

      var shotX2 = Math.floor(Math.random() * 100);
      var shotY2 = Math.floor(Math.random() * 100);

      if (shotX1 != soldier1.currentCoordinates.x && shotY1 != soldier1.currentCoordinates.y && shotX2 != soldier2.currentCoordinates.x && shotY2 != soldier2.currentCoordinates.y) {
        soldier1.shot(shotX1, shotY1);
        soldier2.shot(shotX2, shotY2);

        if (shotX1 === soldier2.currentCoordinates.x && shotY1 === soldier2.currentCoordinates.y) {
          soldier2.gotShot();
        }
        if (shotX2 === soldier1.currentCoordinates.x && shotY2 === soldier1.currentCoordinates.y) {
          soldier1.gotShot();
        }
      } else {
        console.log('Someone tried to shoot himself!!');
      }
    } else {
      return 0;
    }
  }, 1000);
}
