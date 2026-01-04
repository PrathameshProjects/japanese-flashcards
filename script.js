// Japanese words database
const flashcards = [
    { word: "こんにちは", romaji: "konnichiwa", meaning: "Hello" },
    { word: "ありがとう", romaji: "arigatou", meaning: "Thank you" },
    { word: "さようなら", romaji: "sayounara", meaning: "Goodbye" },
    { word: "おはよう", romaji: "ohayou", meaning: "Good morning" },
    { word: "すみません", romaji: "sumimasen", meaning: "Excuse me / Sorry" },
    { word: "はい", romaji: "hai", meaning: "Yes" },
    { word: "いいえ", romaji: "iie", meaning: "No" },
    { word: "おやすみ", romaji: "oyasumi", meaning: "Good night" },
    { word: "ください", romaji: "kudasai", meaning: "Please" },
    { word: "わかりました", romaji: "wakarimashita", meaning: "I understand" },
    { word: "学校", romaji: "gakkou", meaning: "School" },
    { word: "本", romaji: "hon", meaning: "Book" },
    { word: "水", romaji: "mizu", meaning: "Water" },
    { word: "食べる", romaji: "taberu", meaning: "To eat" },
    { word: "飲む", romaji: "nomu", meaning: "To drink" },
    { word: "友達", romaji: "tomodachi", meaning: "Friend" },
    { word: "時間", romaji: "jikan", meaning: "Time" },
    { word: "好き", romaji: "suki", meaning: "Like" },
    { word: "嫌い", romaji: "kirai", meaning: "Dislike" },
    { word: "勉強", romaji: "benkyou", meaning: "Study" }
];

let currentIndex = 0;
let score = 0;
let isFlipped = false;
let hasStarted = false;

// Get DOM elements
const wordElement = document.getElementById('word');
const meaningElement = document.getElementById('meaning');
const romajiElement = document.getElementById('romaji');
const cardInner = document.getElementById('cardInner');
const progressElement = document.getElementById('progress');
const scoreElement = document.getElementById('score');

const startBtn = document.getElementById('startBtn');
const flipBtn = document.getElementById('flipBtn');
const knowBtn = document.getElementById('knowBtn');
const dontKnowBtn = document.getElementById('dontKnowBtn');
const nextBtn = document.getElementById('nextBtn');

// Shuffle array function
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

let shuffledCards = [];

// Start the quiz
function startQuiz() {
    hasStarted = true;
    shuffledCards = shuffleArray(flashcards);
    currentIndex = 0;
    score = 0;
    
    startBtn.disabled = true;
    flipBtn.disabled = false;
    
    showCard();
    updateStats();
}

// Show current card
function showCard() {
    if (currentIndex >= shuffledCards.length) {
        endQuiz();
        return;
    }
    
    const card = shuffledCards[currentIndex];
    wordElement.textContent = card.word;
    meaningElement.textContent = card.meaning;
    romajiElement.textContent = card.romaji;
    
    // Reset flip
    if (isFlipped) {
        cardInner.classList.remove('flipped');
        isFlipped = false;
    }
    
    // Enable/disable buttons
    flipBtn.disabled = false;
    knowBtn.disabled = true;
    dontKnowBtn.disabled = true;
    nextBtn.disabled = true;
}

// Flip card
function flipCard() {
    cardInner.classList.toggle('flipped');
    isFlipped = !isFlipped;
    
    if (isFlipped) {
        flipBtn.disabled = true;
        knowBtn.disabled = false;
        dontKnowBtn.disabled = false;
    }
}

// Handle "I Know This" button
function handleKnow() {
    score++;
    updateStats();
    
    knowBtn.disabled = true;
    dontKnowBtn.disabled = true;
    nextBtn.disabled = false;
}

// Handle "Don't Know" button
function handleDontKnow() {
    knowBtn.disabled = true;
    dontKnowBtn.disabled = true;
    nextBtn.disabled = false;
}

// Go to next card
function nextCard() {
    currentIndex++;
    showCard();
    updateStats();
}

// Update statistics
function updateStats() {
    progressElement.textContent = `${currentIndex}/${shuffledCards.length}`;
    scoreElement.textContent = score;
}

// End quiz
function endQuiz() {
    wordElement.textContent = 'Quiz Complete!';
    meaningElement.textContent = '';
    romajiElement.textContent = '';
    
    if (isFlipped) {
        cardInner.classList.remove('flipped');
        isFlipped = false;
    }
    
    const percentage = Math.round((score / shuffledCards.length) * 100);
    wordElement.textContent = `Quiz Complete!`;
    
    setTimeout(() => {
        alert(`Your score: ${score}/${shuffledCards.length} (${percentage}%)`);
    }, 500);
    
    // Reset buttons
    startBtn.disabled = false;
    flipBtn.disabled = true;
    knowBtn.disabled = true;
    dontKnowBtn.disabled = true;
    nextBtn.disabled = true;
    
    hasStarted = false;
}

// Event listeners
startBtn.addEventListener('click', startQuiz);
flipBtn.addEventListener('click', flipCard);
knowBtn.addEventListener('click', handleKnow);
dontKnowBtn.addEventListener('click', handleDontKnow);
nextBtn.addEventListener('click', nextCard);
