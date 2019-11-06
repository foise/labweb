function beginWar() {
  const fieldSize = 100;
  var soldier1 = {
    name: 'Soldier1',
    health: 100,
    currentCoordinates: {
      x: 40,
      y: 20
    },
    shotCoordinates: {
      x: 0,
      y: 0
    },
    shot: function () {
      var shotFail = true;
      while (shotFail) {
        var shotX = Math.floor(Math.random() * fieldSize);
        var shotY = Math.floor(Math.random() * fieldSize);
        if (shotX === this.currentCoordinates.x && shotY === this.currentCoordinates.y) {
          console.log('Soldier1 is trying to kill himself!!')
          shotFail = true;
        } else {
          shotFail = false;
        }
      }
      console.log('Soldier1 shoots!!');
      console.log(shotX, shotY);
      this.shotCoordinates.x = shotX;
      this.shotCoordinates.y = shotY;
    },
    spawn: function (secondSpawnX) {
      var spawnFail = true;
      while (spawnFail) {
        var spawnX = Math.floor(Math.random() * fieldSize);
        var spawnY = Math.floor(Math.random() * fieldSize);
        if (spawnX === secondSpawnX) {
          console.log('Soldier1 is trying to spawn inside Soldier2!');
          spawnFail = true;
        } else {
          spawnFail = false;
        }
      }

      this.currentCoordinates.x = spawnX;
      this.currentCoordinates.y = spawnY;
      console.log('Soldier1 spawns!');
      console.log(this.currentCoordinates.x, this.currentCoordinates.y);
    },
    gotShot: function (shotX, shotY) {
      if (shotX === this.currentCoordinates.x && shotY === this.currentCoordinates.y) {
        this.health = this.health - 25;
        console.log('Soldier2 got shot!');
      }
    },
    death: function () {
      if (this.health <= 0) {
        console.log('Soldier2 is dead!');
        return true;
      } else {
        return false;
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
    shotCoordinates: {
      x: 0,
      y: 0
    },
    shot: function () {
      var shotFail = true;
      while (shotFail) {
        var shotX = Math.floor(Math.random() * fieldSize);
        var shotY = Math.floor(Math.random() * fieldSize);
        if (shotX === this.currentCoordinates.x && shotY === this.currentCoordinates.y) {
          console.log('Soldier2 is trying to kill himself!!')
          shotFail = true;
        } else {
          shotFail = false;
        }
      }
      console.log('Soldier2 shoots!!');
      console.log(shotX, shotY);
      this.shotCoordinates.x = shotX;
      this.shotCoordinates.y = shotY;
    },
    spawn: function (secondSpawnX) {
      var spawnFail = true;
      while (spawnFail) {
        var spawnX = Math.floor(Math.random() * fieldSize);
        var spawnY = Math.floor(Math.random() * fieldSize);
        if (spawnX === secondSpawnX) {
          console.log('Soldier2 is trying to spawn inside Soldier1!')
          spawnFail = true;
        } else {
          spawnFail = false;
        }
      }

      this.currentCoordinates.x = spawnX;
      this.currentCoordinates.y = spawnY;
      console.log('Soldier2 spawns!');
      console.log(this.currentCoordinates.x, this.currentCoordinates.y);
    },
    gotShot: function (shotX, shotY) {
      if (shotX === this.currentCoordinates.x && shotY === this.currentCoordinates.y) {
        this.health = this.health - 25;
        console.log('Soldier2 got shot!');
      }
    },
    death: function () {
      if (this.health <= 0) {
        console.log('Soldier2 is dead!');
        return true;
      } else {
        return false;
      }
    }
  };

  soldier1.spawn(0);
  soldier2.spawn(soldier1.currentCoordinates.x);

  var action = setInterval(function () {
    if (soldier2.death() || soldier1.death()) {
      clearInterval(action);
    } else {
      soldier1.shot();
      soldier2.shot();

      soldier2.gotShot(soldier1.shotCoordinates.x, soldier1.shotCoordinates.y);
      soldier1.gotShot(soldier2.shotCoordinates.x, soldier2.shotCoordinates.y);
    }
  }, 1);
}
