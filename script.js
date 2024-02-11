const arrayWords = [
  "investigation",
  "lunaire",
  "muraille",
  "operation",
  "lamentable",
  "prairie",
  "multiple",
  "addition",
  "appartement",
  "carrelage",
  "cellule",
  "corbeau",
  "industrie",
  "developpement",
  "javascript",
  "python",
];
const buttons = document.querySelectorAll(".lettres");
const displayWord = document.getElementById("mot");
const wrongLetter = document.querySelector(".badLetter");
const randomWords = arrayWords[Math.floor(Math.random() * arrayWords.length)];
const newGame = document.querySelector(".partie");
let motActuel = "";
let lettreDevinee = [];
let vie = 7;

const verifierMot = () => {
  let nouveauMot = "";
  for (let i = 0; i < randomWords.length; i++) {
    if (lettreDevinee.includes(randomWords[i])) {
      nouveauMot += randomWords[i];
    } else {
      nouveauMot += "-";
    }
  }
  motActuel = nouveauMot;
  displayWord.textContent = motActuel;
  life.textContent = vie;
  console.log(motActuel);
};
verifierMot();

const verifierLettre = (lettre) => {
  if (randomWords.includes(lettre)) {
    lettreDevinee.push(lettre);
    displayWord.textContent += lettre;
    verifierMot();
  } else {
    life.textContent = vie--;
    wrongLetter.textContent += lettre;
    console.log(vie);
  }
};

const resultGame = () => {
  if (motActuel == randomWords) {
    result.textContent = "Bravo c'est gagné !";
    life.textContent = vie;
  } else if (vie === 0 && motActuel != randomWords) {
    result.textContent = "Vous avez perdu ! mot recherché : " + randomWords;
    life.textContent = vie;
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    verifierLettre(e.target.textContent);
    verifierMot();
    resultGame();
  });
});

newGame.addEventListener("click", () => {
  location.reload();
});

