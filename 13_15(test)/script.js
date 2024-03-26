import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
    "Everyday Backpack",
    30,
    "grey",
    15,
    26,
    26,
    false,
    "December 5, 2018 15:00:00 PST"
  );
  
  console.log("The everydayPack object:", everydayPack);
  console.log("The pocketNum value:", everydayPack.pocketNum);
  console.log("Days since aquired:", everydayPack.backpackAge());
  
  const civilWar = new Book(
    "Captain America Civil War",
    "Steve Rogers",
    616199999999999,
    "2016",
    256,
    256,
    "Finished"
  );
  console.log(civilWar);

  const apokolipsWar = new Book(
    "Justice League: Apokolips War",
    "Clark Kent",
    6161995699998,
    "2014",
    316,
    316,
    "Finished"
  );
  console.log(apokolipsWar);

  const infinityWar = new Book(
    "Avengers: Infinity War",
    "Tony Stark",
    616199999999757,
    "2018",
    361,
    257,
    "Uncompleted"
  );
  console.log(infinityWar);

  const flashPoint = new Book(
    "Flaspoint Paradox",
    "Barry Allen",
    7121995699998,
    "2016",
    506,
    506,
    "Finished"
  );
  console.log(flashPoint);

  const endgame = new Book(
    "Avengers: Endgame",
    "Stan Lee",
    616199999999712,
    "2020",
    459,
    459,
    "Finished"
  );
  console.log(endgame);
  