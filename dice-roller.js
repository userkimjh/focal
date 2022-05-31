const diceRoller = function() {
  let numRoll = process.argv[2];
  let currRoll = 0;
  let currNum = [];
  while (currRoll < numRoll) {
    currNum.push(Math.ceil(Math.random() * 6));
    currRoll++;
  };
  console.log(`Rolled 3 dice: ${currNum.join(',')}`);
};

diceRoller()