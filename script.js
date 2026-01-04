const words = [
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
    { front: "Seito", back: "Pupil / Student (せいと)" },
    { front: "Kyouju", back: "Professor (きょうじゅ)" },
    { front: "Jo-kyouju", back: "Associate professor (じょきょうじゅ)" },

    { front: "Kougakubu", back: "Engineering faculty (こうがくぶ)" },
    { front: "Gakubu", back: "Faculty / Department (がくぶ)" },
    { front: "Senkou", back: "Major / Specialization (せんこう)" },

    { front: "Gijutsu", back: "Technology (ぎじゅつ)" },
    { front: "Kagaku", back: "Science (かがく)" },
    { front: "Denki / Denchi", back: "Electricity / Battery (でんき / でんち)" },
    { front: "Jouhou", back: "Information (じょうほう)" },

    { front: "Aisatsu", back: "Greeting (あいさつ)" },
    { front: "Jiko Shoukai", back: "Self introduction (じこしょうかい)" },

    { front: "Nihon", back: "Japan (にほん)" },
    { front: "Kyoushitsu", back: "Classroom (きょうしつ)" },

    { front: "Ohayou gozaimasu", back: "Good morning (おはようございます)" },
    { front: "Konnichiwa", back: "Good afternoon / Hello (こんにちは)" },
    { front: "Konbanwa", back: "Good evening (こんばんは)" },
    { front: "Sayounara", back: "Goodbye (さようなら)" },
    { front: "Ja mata", back: "See you again (じゃまた)" },
    { front: "Hajimemashite", back: "Nice to meet you (はじめまして)" },

    { front: "Gomen nasai", back: "Sorry (ごめんなさい)" },
    { front: "Arigatou", back: "Thank you (ありがとう)" },
    { front: "Arigatou gozaimasu", back: "Thank you very much (ありがとうございます)" },
    { front: "Oyasumi nasai", back: "Good night (おやすみなさい)" },
    { front: "Sumimasen", back: "Excuse me / Sorry (すみません)" },
    { front: "Onegai shimasu", back: "Please (お願いします)" },
    { front: "Dou itashimashite", back: "You’re welcome (どういたしまして)" },

    { front: "Hai", back: "Yes (はい)" },
    { front: "Iie", back: "No (いいえ)" },

    { front: "Watashi no", back: "My (わたしの)" },
    { front: "Anata no", back: "Your (あなたの)" },
    { front: "Kare", back: "He (かれ)" },
    { front: "Kanojo", back: "She (かのじょ)" },
    { front: "Kare no", back: "His (かれの)" },
    { front: "Kanojo no", back: "Her (かのじょの)" },

    { front: "Sou", back: "So / That’s right (そう)" },
    { front: "Hito", back: "Person (ひと)" },
    { front: "Chigau", back: "Different / No (ちがう)" },

    { front: "Kore", back: "This (これ)" },
    { front: "Sore", back: "That (それ)" },
    { front: "Are", back: "That over there (あれ)" },

    { front: "Keitai", back: "Mobile phone (けいたい)" },
    { front: "Hon", back: "Book (ほん)" },
    { front: "Kagi", back: "Key (かぎ)" },
    { front: "Enpitsu", back: "Pencil (えんぴつ)" },
    { front: "Denwa", back: "Telephone (でんわ)" },
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
