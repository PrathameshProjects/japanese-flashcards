const words = [
    { front: "Apple", back: "Ringo (りんご)" },
    { front: "Water", back: "Mizu (みず)" },
    { front: "Book", back: "Hon (ほん)" },
    { front: "Home", back: "Ie (いえ)" }
];

let index = 0;

const flashcard = document.getElementById("flashcard");
const front = document.getElementById("cardFront");
const back = document.getElementById("cardBack");

flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("flipped");
});

function loadCard() {
    flashcard.classList.remove("flipped");
    front.textContent = words[index].front;
    back.textContent = words[index].back;
}

function nextCard() {
    index = (index + 1) % words.length;
    loadCard();
}

function prevCard() {
    index = (index - 1 + words.length) % words.length;
    loadCard();
}

loadCard();
