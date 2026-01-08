const hiraganaData = [
    // A row
    { front: "a", back: "あ" },
    { front: "i", back: "い" },
    { front: "u", back: "う" },
    { front: "e", back: "え" },
    { front: "o", back: "お" },
    
    // KA row
    { front: "ka", back: "か" },
    { front: "ki", back: "き" },
    { front: "ku", back: "く" },
    { front: "ke", back: "け" },
    { front: "ko", back: "こ" },
    
    // SA row
    { front: "sa", back: "さ" },
    { front: "shi", back: "し" },
    { front: "su", back: "す" },
    { front: "se", back: "せ" },
    { front: "so", back: "そ" },
    
    // TA row
    { front: "ta", back: "た" },
    { front: "chi", back: "ち" },
    { front: "tsu", back: "つ" },
    { front: "te", back: "て" },
    { front: "to", back: "と" },
    
    // NA row
    { front: "na", back: "な" },
    { front: "ni", back: "に" },
    { front: "nu", back: "ぬ" },
    { front: "ne", back: "ね" },
    { front: "no", back: "の" },
    
    // HA row
    { front: "ha", back: "は" },
    { front: "hi", back: "ひ" },
    { front: "fu", back: "ふ" },
    { front: "he", back: "へ" },
    { front: "ho", back: "ほ" },
    
    // MA row
    { front: "ma", back: "ま" },
    { front: "mi", back: "み" },
    { front: "mu", back: "む" },
    { front: "me", back: "め" },
    { front: "mo", back: "も" },
    
    // YA row
    { front: "ya", back: "や" },
    { front: "yu", back: "ゆ" },
    { front: "yo", back: "よ" },
    
    // RA row
    { front: "ra", back: "ら" },
    { front: "ri", back: "り" },
    { front: "ru", back: "る" },
    { front: "re", back: "れ" },
    { front: "ro", back: "ろ" },
    
    // WA row
    { front: "wa", back: "わ" },
    { front: "wo", back: "を" },
    
    // N
    { front: "n", back: "ん" }
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
