let randomNumber1 = Math.floor(Math.random() * 6 + 1);

let randomNumber2 = Math.floor(Math.random() * 6 + 1);

let diceImageSource1 = "images/dice" + randomNumber1 + ".png";

let diceImageSource2 = "images/dice" + randomNumber2 + ".png";

document.getElementById("image1").setAttribute("src", diceImageSource1);

document.getElementById("image2").setAttribute("src", diceImageSource2);

if (randomNumber1 === randomNumber2) {
  document.getElementById("heading").innerHTML = "😎 Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.getElementById("heading").innerHTML = "😄 Player 1 Win!";
} else if (randomNumber1 < randomNumber2) {
  document.getElementById("heading").innerHTML = "😍 Player 2 Win!";
}
