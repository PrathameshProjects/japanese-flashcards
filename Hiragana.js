const hiraganaData  = [
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
    { front: "n", back: "ん" },

        // GA row (が ぎ ぐ げ ご)
    { front: "ga", back: "が" },
    { front: "gi", back: "ぎ" },
    { front: "gu", back: "ぐ" },
    { front: "ge", back: "げ" },
    { front: "go", back: "ご" },
    
    // ZA row (ざ じ ず ぜ ぞ)
    { front: "za", back: "ざ" },
    { front: "ji", back: "じ" },
    { front: "zu", back: "ず" },
    { front: "ze", back: "ぜ" },
    { front: "zo", back: "ぞ" },
    
    // DA row (だ ぢ づ で ど)
    { front: "da", back: "だ" },
    { front: "ji", back: "ぢ" },
    { front: "zu", back: "づ" },
    { front: "de", back: "で" },
    { front: "do", back: "ど" },
    
    // BA row (ば び ぶ べ ぼ)
    { front: "ba", back: "ば" },
    { front: "bi", back: "び" },
    { front: "bu", back: "ぶ" },
    { front: "be", back: "べ" },
    { front: "bo", back: "ぼ" },
    
    // PA row (ぱ ぴ ぷ ぺ ぽ)
    { front: "pa", back: "ぱ" },
    { front: "pi", back: "ぴ" },
    { front: "pu", back: "ぷ" },
    { front: "pe", back: "ぺ" },
    { front: "po", back: "ぽ" }
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

   front.textContent = hiraganaData[index].front;
back.textContent = hiraganaData[index].back;
progressText.textContent = (index + 1) + " / " + hiraganaData.length + " words";

}

function nextCard() {
    index = (index + 1) % hiraganaData.length;
    loadCard();
}

function prevCard() {
    index = (index - 1 + hiraganaData.length) % hiraganaData.length;
    loadCard();
}


loadCard();
