const  randomAnimalsNames=[
  "Aardvark",
  "Albatross",
  "Alligator",
  "Alpaca",
  "Ant",
  "Anteater",
  "Antelope",
  "Ape",
  "Armadillo",
  "Donkey",
  "Baboon",
  "Badger",
  "Barracuda",
  "Bat",
  "Bear",
  "Beaver",
  "Bee",
  "Bison",
  "Boar",
  "Buffalo",
  "Butterfly",
  "Camel",
  "Capybara",
  "Caribou",
  "Cassowary",
  "Cat",
  "Caterpillar",
  "Cattle",
  "Chamois",
  "Cheetah",
  "Chicken",
  "Chimpanzee",
  "Chinchilla",
  "Chough",
  "Clam",
  "Cobra",
  "Cockroach",
  "Cod",
  "Cormorant",
  "Coyote",
  "Crab",
  "Crane",
  "Crocodile",
  "Crow",
  "Curlew",
  "Deer",
  "Dinosaur",
  "Dog",
  "Dogfish",
  "Dolphin",
  "Dotterel",
  "Dove",
  "Dragonfly",
  "Duck",
  "Dugong",
  "Dunlin",
  "Eagle",
  "Echidna",
  "Eel",
  "Eland",
  "Elephant",
  "Elk",
  "Emu",
  "Falcon",
  "Ferret",
  "Finch",
  "Fish",
  "Flamingo",
  "Fly",
  "Fox",
  "Frog",
  "Gaur",
  "Gazelle",
  "Gerbil",
  "Giraffe",
  "Gnat",
  "Gnu",
  "Goat",
  "Goldfinch",
  "Goldfish",
  "Goose",
  "Gorilla",
  "Goshawk",
  "Grasshopper",
  "Grouse",
  "Guanaco",
  "Gull",
  "Hamster",
  "Hare",
  "Hawk",
  "Hedgehog",
  "Heron",
  "Herring",
  "Hippopotamus",
  "Hornet",
  "Horse",
  "Human",
  "Hummingbird",
  "Hyena",
  "Ibex",
  "Ibis",
  "Jackal",
  "Jaguar",
  "Jay",
  "Jellyfish",
  "Kangaroo",
  "Kingfisher",
  "Koala",
  "Kookabura",
  "Kouprey",
  "Kudu",
  "Lapwing",
  "Lark",
  "Lemur",
  "Leopard",
  "Lion",
  "Llama",
  "Lobster",
  "Locust",
  "Loris",
  "Louse",
  "Lyrebird",
  "Magpie",
  "Mallard",
  "Manatee",
  "Mandrill",
  "Mantis",
  "Marten",
  "Meerkat",
  "Mink",
  "Mole",
  "Mongoose",
  "Monkey",
  "Moose",
  "Mosquito",
  "Mouse",
  "Mule",
  "Narwhal",
  "Newt",
  "Nightingale",
  "Octopus",
  "Okapi",
  "Opossum",
  "Oryx",
  "Ostrich",
  "Otter",
  "Owl",
  "Oyster",
  "Panther",
  "Parrot",
  "Partridge",
  "Peafowl",
  "Pelican",
  "Penguin",
  "Pheasant",
  "Pig",
  "Pigeon",
  "Pony",
  "Porcupine",
  "Porpoise",
  "Quail",
  "Quelea",
  "Quetzal",
  "Rabbit",
  "Raccoon",
  "Rail",
  "Ram",
  "Rat",
  "Raven",
  "Red deer",
  "Red panda",
  "Reindeer",
  "Rhinoceros",
  "Rook",
  "Salamander",
  "Salmon",
  "Sand Dollar",
  "Sandpiper",
  "Sardine",
  "Scorpion",
  "Seahorse",
  "Seal",
  "Shark",
  "Sheep",
  "Shrew",
  "Skunk",
  "Snail",
  "Snake",
  "Sparrow",
  "Spider",
  "Spoonbill",
  "Squid",
  "Squirrel",
  "Starling",
  "Stingray",
  "Stinkbug",
  "Stork",
  "Swallow",
  "Swan",
  "Tapir",
  "Tarsier",
  "Termite",
  "Tiger",
  "Toad",
  "Trout",
  "Turkey",
  "Turtle",
  "Viper",
  "Vulture",
  "Wallaby",
  "Walrus",
  "Wasp",
  "Weasel",
  "Whale",
  "Wildcat",
  "Wolf",
  "Wolverine",
  "Wombat",
  "Woodcock",
  "Woodpecker",
  "Worm",
  "Wren",
  "Yak",
  "Zebra"
];
let totalChances = 0;
let correctGuesses = 0;
let randomAnimalName = null;


const hangstandChildren = document.querySelector(".hangstand").children;
Array.from(hangstandChildren).forEach((child) => child.classList.add("display-none"));


function giveMeButtonsOnScreen() {
  const rootEl = document.querySelector(".buttons-parent");
  rootEl.innerHTML = ""; 
  for (let i = 65; i <= 90; i++) {
    const btn = document.createElement("button");
    btn.textContent = String.fromCharCode(i);
    rootEl.appendChild(btn);
  }
}


function chooseRandomAnimalName() {
  const blankParentEl = document.querySelector(".blanks_parent");
  blankParentEl.innerHTML = ""; 
  const randomIndex = Math.floor(Math.random() * randomAnimalsNames.length);
  randomAnimalName = randomAnimalsNames[randomIndex].toUpperCase();

  for (const letter of randomAnimalName) {
    const alpha = document.createElement("p");
    const span = document.createElement("span");
    span.textContent = letter;

    if (letter === " ") {
      
      alpha.textContent = " ";
      correctGuesses++;
    } else {
      span.style.display = "none";
      alpha.appendChild(span);
    }

    blankParentEl.appendChild(alpha);
  }
}


function buttonParentClickFunction(e) {
  if (e.target.tagName !== "BUTTON" || e.target.disabled) return;

  const letterClicked = e.target.textContent;
  const allSpans = document.querySelectorAll(".blanks_parent span");

  let found = false;
  allSpans.forEach((span) => {
    if (span.textContent === letterClicked && span.style.display === "none") {
      span.style.display = "inline";
      correctGuesses++;
      found = true;
    }
  });

  if (found) {
    e.target.classList.add("greenBtn");
  } else {
    totalChances++;
    const partToShow = document.querySelector(`.class${totalChances}`);
    if (partToShow) partToShow.classList.remove("display-none");
    e.target.classList.add("redBtn");
  }

  e.target.disabled = true;

  const totalLetters = randomAnimalName.replace(/\s/g, "").length;
  const gameMessageEl = document.getElementById("gameMessage");

  function showEndMessage(message, word = "") {
    let fullMessage = `<strong>${message}</strong><br><br>✅ Correct Guesses: ${correctGuesses}<br>❌ Wrong Attempts: ${totalChances}`;
    if (word) fullMessage += `<br> The word was: <strong>${word}</strong>`;

    gameMessageEl.innerHTML = `
      <div>${fullMessage}</div>
      <button onclick="startGame()">🔁 Play Again</button>
    `;
    gameMessageEl.classList.remove("display-none");
  }

  
  if (correctGuesses === totalLetters) {
    showEndMessage("🎉 You Won!");
  }

  
  if (totalChances >= 10) {
    revealAllLetters();
    showEndMessage("💀 You Lost!", randomAnimalName);
  }
}



function revealAllLetters() {
  document.querySelectorAll(".blanks_parent span").forEach((span) => {
    span.style.display = "inline";
  });
}


function startGame() {
  document.getElementById("gameMessage").classList.add("display-none");
  document.getElementById("gameMessage").textContent = "";
  totalChances = 0;
  correctGuesses = 0;
  giveMeButtonsOnScreen();
  chooseRandomAnimalName();

  Array.from(hangstandChildren).forEach((child) =>
    child.classList.add("display-none")
  );
}

document.querySelector(".buttons-parent").addEventListener("click", buttonParentClickFunction);

startGame();
