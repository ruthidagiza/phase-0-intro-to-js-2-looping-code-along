// Code your solutions in this file
function writeCards(name, event) {
    let thankYou = [];
    for (let i = 0; i < name.length; i++) {
      thankYou.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return thankYou;
  }
  console.log(writeCards(["Ruth", "Kelvin", "Tangus", "Caudencia"], "surprise"));

  function countDown(firstNumber) {
    while (firstNumber > 0) {
      console.log(firstNumber)
      firstNumber--;
    }
    console.log(firstNumber);
  }
  countDown(10);
