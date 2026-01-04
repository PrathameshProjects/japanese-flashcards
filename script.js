const vocabulary = [
    { front: "Watashi", back: "I / Me (わたし)" },
    { front: "Anata", back: "You (あなた)" },
    { front: "Namae", back: "Name (なまえ)" },
    { front: "Nani / Nan", back: "What (なに / なん)" },
    { front: "Gakusei", back: "Student (がくせい)" },
    { front: "Sumu", back: "To live (すむ)" },

    { front: "Kaisha-in", back: "Company employee (かいしゃいん)" },
    { front: "Koumu-in", back: "Government employee (こうむいん)" },
    { front: "Ten-in", back: "Shop assistant (てんいん)" },
    { front: "Sensei", back: "Teacher (せんせい)" },
    { front: "Seito", back: "Student (せいと)" },
    { front: "Kyouju", back: "Professor (きょうじゅ)" },
    { front: "Jo-kyouju", back: "Associate professor (じょきょうじゅ)" },

    { front: "Aisatsu", back: "Greeting (あいさつ)" },
    { front: "Jiko Shoukai", back: "Self introduction (じこしょうかい)" },

    { front: "Ohayou gozaimasu", back: "Good morning (おはようございます)" },
    { front: "Konnichiwa", back: "Hello (こんにちは)" },
    { front: "Konbanwa", back: "Good evening (こんばんは)" },
    { front: "Sayounara", back: "Goodbye (さようなら)" },
    { front: "Arigatou gozaimasu", back: "Thank you very much (ありがとうございます)" },
    { front: "Sumimasen", back: "Excuse me / Sorry (すみません)" },

    { front: "Kore", back: "This (これ)" },
    { front: "Sore", back: "That (それ)" },
    { front: "Are", back: "That over there (あれ)" },

    { front: "Hon", back: "Book (ほん)" },
    { front: "Tsukue", back: "Desk (つくえ)" },
    { front: "Isu", back: "Chair (いす)" }
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
    front.textContent = vocabulary[index].front;
    back.textContent = vocabulary[index].back;
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
