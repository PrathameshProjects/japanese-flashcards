const vocabulary = [
    { front: "I / Me", back: "Watashi (わたし)" },
    { front: "You", back: "Anata (あなた)" },
    { front: "Name", back: "Namae (なまえ)" },
    { front: "What", back: "Nani / Nan (なに / なん)" },
    { front: "Student", back: "Gakusei (がくせい)" },
    { front: "To live", back: "Sumu (すむ)" },

    { front: "Company employee", back: "Kaisha-in (かいしゃいん)" },
    { front: "Government employee", back: "Koumu-in (こうむいん)" },
    { front: "Shop assistant", back: "Ten-in (てんいん)" },
    { front: "Teacher", back: "Sensei (せんせい)" },
    { front: "pupil", back: "Seito (せいと)" },
    { front: "Professor", back: "Kyouju (きょうじゅ)" },
    { front: "Associate professor", back: "Jo-kyouju (じょきょうじゅ)" },
     { front: "student", back: "gakusei" },

    { front: "Greeting", back: "Aisatsu (あいさつ)" },
    { front: "Self introduction", back: "Jiko shoukai (じこしょうかい)" },

    { front: "Good morning", back: "Ohayou gozaimasu (おはようございます)" },
    { front: "Hello", back: "Konnichiwa (こんにちは)" },
    { front: "Good evening", back: "Konbanwa (こんばんは)" },
    { front: "Goodbye", back: "Sayounara (さようなら)" },
    { front: "Thank you very much", back: "Arigatou gozaimasu (ありがとうございます)" },
    { front: "Excuse me / Sorry", back: "Sumimasen (すみません)" },

    { front: "This", back: "Kore (これ)" },
    { front: "That", back: "Sore (それ)" },
    { front: "That over there", back: "Are (あれ)" },

    { front: "Book", back: "Hon (ほん)" },
    { front: "Desk", back: "Tsukue (つくえ)" },
    { front: "Chair", back: "Isu (いす)" }
];

let index = 0;

const flashcard = document.getElementById("flashcard");
const front = document.getElementById("cardFront");
const back = document.getElementById("cardBack");
const progressText = document.getElementById("progress");

flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("flipped");
});

function loadCard() {
    flashcard.classList.remove("flipped");

    front.textContent = vocabulary[index].front;
    back.textContent = vocabulary[index].back;

    progressText.textContent =
        (index + 1) + " / " + vocabulary.length + " words";
}

function nextCard() {
    index = (index + 1) % vocabulary.length;
    loadCard();
}

function prevCard() {
    index = (index - 1 + vocabulary.length) % vocabulary.length;
    loadCard();
}

loadCard();
