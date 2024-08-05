
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
  "Queen 👑",
  "Qatar 🇶🇦",
  "Quail 🐓",
  "Quality 💯",
  "Quiet 🗣️",
  "Rabbit 🐰",
  "Rainbow 🌈",
  "Rat 🐀",
  "Robot 🤖",
];








 var input = document.getElementById("display");

 var button = document.querySelectorAll(".button");

var specificLetterA = [];






button.forEach(function (btn) {
  btn.addEventListener("click", function () {
    
    // Clear the specificLetterA array
    specificLetterA = [];
for (let i = 0; i < alphabets.length; i++) {
  if (alphabets[i][0] == btn.innerHTML) {
    specificLetterA.push(alphabets[i]);
    console.log("hi");
    input.value =""
  }
}

    // Get a random index from the specificLetterA array
    var number = Math.floor(Math.random() * specificLetterA.length);
    // console.log(specificLetterA[number]);
    var word = specificLetterA[number];
    // console.log(word);
    input.value += word;
  });
});




















"Apple 🍎", "Ant 🐜", "Airplane ✈️", "Alligator 🐊", "Astronaut 👩‍🚀"],
    "Ball ⚽", "Banana 🍌", "Bear 🐻", "Boat 🚤", "Butterfly 🦋"],
    "Cat 🐱", "Car 🚗", "Cake 🎂", "Cow 🐮", "Crayon 🖍️"],
    "Dog 🐶", "Duck 🦆", "Doll 🪆", "Drum 🥁", "Dinosaur 🦕"],
    "Elephant 🐘", "Egg 🥚", "Engine 🚂", "Envelope ✉️", "Eagle 🦅"],
    "Fish 🐟", "Frog 🐸", "Flower 🌸", "Firetruck 🚒", "Fox 🦊"],
    "Giraffe 🦒", "Grapes 🍇", "Goat 🐐", "Gift 🎁", "Guitar 🎸"],
    "Horse 🐴", "Hat 🎩", "House 🏠", "Helicopter 🚁", "Heart ❤️"],
   "Ice cream 🍦", "Igloo 🏠", "Insect 🐞", "Island 🏝️", "Iron 🔨"],
    "Juice 🧃", "Jellyfish 🪼", "Jaguar 🐆", "Jeep 🚙", "Jacket 🧥"],
    "Kite 🪁", "Kangaroo 🦘", "Key 🔑", "King 👑", "Kiwi 🥝"],
   "Lion 🦁", "Lamp 🛋️", "Leaf 🍃", "Lemon 🍋", "Ladder 🪜"],
    "Monkey 🐒", "Moon 🌕", "Milk 🥛", "Mouse 🐭", "Mango 🥭"],
   "Nest 🪺", "Notebook 📒", "Nut 🌰", "Nail 🪛", "Nose 👃"],
    "Orange 🍊", "Owl 🦉", "Octopus 🐙", "Ostrich 🪶", "Orca 🐋"],
    "Panda 🐼", "Pencil ✏️", "Peach 🍑", "Parrot 🦜", "Pumpkin 🎃"],
    "Queen 👸", "Quail 🦤", "Quarter 🪙", "Quilt 🛏️", "Quokka 🐹"],
    "Rabbit 🐰", "Rainbow 🌈", "Robot 🤖", "Rose 🌹", "Rocket 🚀"],
    "Sun ☀️", "Star 🌟", "Snake 🐍", "Strawberry 🍓", "Snowman ⛄"],
   "Tiger 🐅", "Train 🚂", "Tree 🌳", "Truck 🚛", "Turtle 🐢"],
   "Umbrella ☂️", "Unicorn 🦄", "Uniform 🧥", "UFO 🛸", "Urchin 🦔"],
    "Van 🚐", "Violin 🎻", "Volcano 🌋", "Vase 🌺", "Vulture 🦅"],
  "Whale 🐋", "Watch ⌚", "Watermelon 🍉", "Wolf 🐺", "Wagon 🛒"],
    "Xylophone 🎼", "X-ray 💀", "Xmas tree 🎄", "Xerus 🐿️", "Xylitol 🍬"],
    "Y": ["Yarn 🧶", "Yacht ⛵", "Yak 🐂", "Yam 🍠", "Yo-yo 🪀"],
    "Z": ["Zebra 🦓", "Zip 🪢", "Zucchini 🥒", "Zoo 🦁", "Zipper 🔌"