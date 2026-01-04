const words = [
    { front: "Apple", back: "Ringo (りんご)" },
    { front: "Water", back: "Mizu (みず)" },
    { front: "Book", back: "Hon (ほん)" },
    { front: "Home", back: "Ie (いえ)" }
];

let currentIndex = 0;
const flashcard = document.getElementById("flashcard");
const cardFront = document.getElementById("cardFront");
const cardBack = document.getElementById("cardBack");

/* Flip card when clicked */
flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("flipped");
});

/* Load card */
function loadCard() {
    flashcard.classList.remove("flipped");
    cardFront.textContent = words[currentIndex].front;
    cardBack.textContent = words[currentIndex].back;
}

/* Next card */
function nextCard() {
    currentIndex = (currentIndex + 1) % words.length;
    loadCard();
}

/* Previous card */
function prevCard() {
    currentIndex = (currentIndex - 1 + words.length) % words.length;
    loadCard();
}

/* Tab function */
function openWords() {
    document.getElementById("wordsSection").style.display = "block";
}

/* Initial load */
loadCard();
