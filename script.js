// Japanese words database - English on front, Japanese on back
const flashcards = [
    { word: "Hello", romaji: "konnichiwa", japanese: "こんにちは" },
    { word: "Thank you", romaji: "arigatou", japanese: "ありがとう" },
    { word: "Goodbye", romaji: "sayounara", japanese: "さようなら" },
    { word: "Good morning", romaji: "ohayou", japanese: "おはよう" },
    { word: "Excuse me / Sorry", romaji: "sumimasen", japanese: "すみません" },
    { word: "Yes", romaji: "hai", japanese: "はい" },
    { word: "No", romaji: "iie", japanese: "いいえ" },
    { word: "Good night", romaji: "oyasumi", japanese: "おやすみ" },
    { word: "Please", romaji: "kudasai", japanese: "ください" },
    { word: "I understand", romaji: "wakarimashita", japanese: "わかりました" },
    { word: "School", romaji: "gakkou", japanese: "学校" },
    { word: "Book", romaji: "hon", japanese: "本" },
    { word: "Water", romaji: "mizu", japanese: "水" },
    { word: "To eat", romaji: "taberu", japanese: "食べる" },
    { word: "To drink", romaji: "nomu", japanese: "飲む" },
    { word: "Friend", romaji: "tomodachi", japanese: "友達" },
    { word: "Time", romaji: "jikan", japanese: "時間" },
    { word: "Like", romaji: "suki", japanese: "好き" },
    { word: "Dislike", romaji: "kirai", japanese: "嫌い" },
    { word: "Study", romaji: "benkyou", japanese: "勉強" }
];

let currentIndex = 0;
let isFlipped = false;

// Get DOM elements
const wordElement = document.getElementById('word');
const meaningElement = document.getElementById('meaning');
const romajiElement = document.getElementById('romaji');
const cardInner = document.getElementById('cardInner');
const progressElement = document.getElementById('progress');

const flipBtn = document.getElementById('flipBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Show current card
function showCard() {
    const card = flashcards[currentIndex];
    wordElement.textContent = card.word;
    meaningElement.textContent = card.japanese;
    romajiElement.textContent = card.romaji;
    
    // Reset flip
    if (isFlipped) {
        cardInner.classList.remove('flipped');
        isFlipped = false;
    }
    
    updateProgress();
    updateButtons();
}

// Flip card
function flipCard() {
    cardInner.classList.toggle('flipped');
    isFlipped = !isFlipped;
}

// Go to previous card
function previousCard() {
    if (currentIndex > 0) {
        currentIndex--;
        showCard();
    }
}

// Go to next card
function nextCard() {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        showCard();
    }
}

// Update progress
function updateProgress() {
    progressElement.textContent = `${currentIndex + 1}/${flashcards.length}`;
}

// Update button states
function updateButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === flashcards.length - 1;
}

// Tab switching function (for future expansion)
function showTab(tabName) {
    // Currently only one tab, but ready for more tabs
}

// Event listeners
flipBtn.addEventListener('click', flipCard);
prevBtn.addEventListener('click', previousCard);
nextBtn.addEventListener('click', nextCard);

// Show first card on load
showCard();
