//Creating an object for the Assignment//

const GameConsole = {
  name: "XBox One",
  color: "Black",
  generation: "Current-Gen",
  exclusives: {
    Halo: 5,
    Forza: 4,
  },
  poweron: false,
  togglePower: function (powerstatus) {
    this.poweron = powerstatus;
  },
  newPowerStatus: function (gaming, standby) {
    this.exclusives.Halo = gaming;
    this.exclusives.Forza = standby;
  },
};

console.log(GameConsole.poweron);

GameConsole.togglePower(true);
console.log(GameConsole.poweron);

console.log(GameConsole.exclusives);

GameConsole.newPowerStatus(10, 8);
console.log(GameConsole.exclusives);
