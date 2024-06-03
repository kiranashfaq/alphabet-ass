// var input = document.getElementById("display");
// var button = document.getElementById("A");

// button.addEventListener("click", function() {
//   input.value += "A";
// });
var alphabets = [
  "Apple 🍎",
  "Ant 🐜",
  "Anchor ⚓️",
  "Airplane ✈️",
  "Arrow ➡️",
  "Banana 🍌",
  "Ball ⚽️",
  "Book 📚",
  "Butterfly 🦋",
  "Balloon 🎈",
  "Carrot 🥕",
  "Cat 🐱",
  "Chair 💺",
  "Cloud ☁️",
  "Clock ⏰",
  "Dog 🐶",
  "Dolphin 🐬",
  "Diamond 💎",
  "Door 🚪",
  "Elephant 🐘",
  "Eagle 🦅",
  "Eleven 1️⃣1️⃣",
  "Egg 🥚",
  "Engine 🚂",
  "Fish 🐟",
  "Fox 🦊",
  "Flag 🚩",
  "Flower 🌸",
  "Frog 🐸",
  "Giraffe 🦒",
  "Goat 🐐",
  "Guitar 🎸",
  "Globe 🌍",
  "Grass 🌿",
  "Horse 🐴",
  "Hat 🎩",
  "Heart ❤️",
  "House 🏠",
  "Ice cream 🍦",
  "Island 🏝️",
  "Ink 🖋️",
  "Igloo ❄️",
  "Iron 🛠️",
  "Jellyfish 🐙",
  "Jacket 👕",
  "Jug 🍺",
  "Juice 🥤",
  "Jewel 💍",
  "Kite 🪁",
  "Kangaroo 🦘",
  "Key 🔑",
  "King 👑",
  "Koala 🐨",
  "Lion 🦁",
  "Lamp 💡",
  "Leaf 🍁",
  "Lemon 🍋",
  "Laptop 💻",
  "Monkey 🐒",
  "Moon 🌙",
  "Mountain ⛰️",
  "Map 🗺️",
  "Nest 🐣",
  "Net 🕸️",
  "Notebook 📓",
  "Nail 💅",
  "Orange 🍊",
  "Owl 🦉",
  "Octopus 🐙",
  "Olive 🫒",
  "Onion 🧅",
  "Penguin 🐧",
  "Piano",
];
 var input = document.getElementById("display");
 var button = document.getElementById("btn");

var specificLetterA = [];
var specificLetterB = [];


for (let i = 0; i < alphabets.length; i++) {
  if (alphabets[i][0] == button.innerHTML) {
    specificLetterA.push(alphabets[i]);
  }
}
button.addEventListener("click", function () {
var number = Math.floor(Math.random() * specificLetterA.length);
// console.log(specificLetter[number]);
var word =  specificLetterA[number];
  input.value += word;

  

});


var button2 = document.getElementById("btn2");

var specificLetterB = [];

for (let i = 0; i < alphabets.length; i++) {
  if (alphabets[i][0] == button2.innerHTML) {
    specificLetterB.push(alphabets[i]);
  }
}
button2.addEventListener("click", function () {
  var number = Math.floor(Math.random() * specificLetterB.length);
  // console.log(specificLetter[number]);
  var word = specificLetterB[number];
  input.value += word;
  


});





var button3 = document.getElementById("btn3");

var specificLetterC = [];

for (let i = 0; i < alphabets.length; i++) {
  if (alphabets[i][0] == button3.innerHTML) {
    specificLetterC.push(alphabets[i]);
  }
}
button3.addEventListener("click", function () {
  var number = Math.floor(Math.random() * specificLetterC.length);
  // console.log(specificLetter[number]);
  var word = specificLetterC[number];
  input.value += word;

});

