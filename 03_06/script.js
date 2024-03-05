/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);

//Practice Test//

const iPhone = {
  name: "Papas Phone",
  color: "gold",
  price: "2,300",
  apps: "15",

  m2chip: {
    gaming: "yes",
    processing: "high",
  },
};

console.log("Papa's Iphone", iPhone);

var query = "color";

console.log("Iphone Color", iPhone[query]);
