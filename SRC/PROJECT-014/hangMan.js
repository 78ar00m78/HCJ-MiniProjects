const buttons = document.body.querySelectorAll("button");
const result = document.body.querySelector(".result");
const img = document.body.querySelector("img");
const word = document.body.querySelector(".the-word");
const randomWords = ["watermelon", "lemon", "apple", "orange", "berry"];
const randomlySelectedWord =
    randomWords[Math.floor(Math.random() * randomWords.length)];
word.innerText = "-".repeat(randomlySelectedWord.length);
const replaceAt = function (index, string, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
};
const finishTheGame = function (object) {
    for (const elements of object) {
        elements.setAttribute("disabled", "");
    }
};
const allOccurrence = function (string, search) {
    const indexes = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === search) {
            indexes.push(i);
        }
    }
    return indexes;
};
let partsOfTheHangMan = 1;
for (const btn of buttons) {
    btn.addEventListener("click", () => {
        if (randomlySelectedWord.includes(btn.innerText.toLowerCase())) {
            const occurrences = allOccurrence(
                randomlySelectedWord,
                btn.innerText.toLowerCase()
            );

            for (const places of occurrences) {
                const x = replaceAt(
                    places,
                    word.innerText,
                    btn.innerText.toLowerCase()
                );
                word.innerText = x;

                if (x === randomlySelectedWord) {
                    finishTheGame(buttons);
                    img.setAttribute(
                        "src",
                        "../../ASSETS/IMAGES/PNG/winner.png"
                    );
                    result.innerText = "You win";
                }
            }
        } else {
            partsOfTheHangMan++;
            img.setAttribute(
                "src",
                replaceAt(
                    31,
                    "../../ASSETS/IMAGES/PNG/hangman0.png",
                    partsOfTheHangMan
                )
            );
            if (partsOfTheHangMan === 6) {
                result.innerText = "You Lose";
                word.innerText = randomlySelectedWord;
                finishTheGame(buttons);
            }
        }
        btn.setAttribute("disabled", "");
    });
}
