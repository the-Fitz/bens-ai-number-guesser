let low, high, guess, tries;

function startGame() {
    low = 1;
    high = 100;
    tries = 0;

    document.getElementById("historyList").innerHTML = "";
    document.getElementById("gameArea").style.display = "block";
    document.getElementById("status").innerText = "AI is guessing...";

    makeGuess();
}

function makeGuess() {
    guess = Math.floor((low + high) / 2);
    tries++;

    // Special “funny 67” rule – AI checks 67 earlier
    if (tries === 1 && low === 1 && high === 100) {
        guess = 67;
    }

    document.getElementById("guess").innerText = guess;
}

function recordHistory(text, extraClass = "") {
    const li = document.createElement("li");
    li.innerHTML = `<span class="${extraClass}">${guess} → ${text}</span>`;
    document.getElementById("historyList").appendChild(li);
}

function tooLow() {
    recordHistory("Too low", "");
    low = guess + 1;
    makeGuess();
}

function tooHigh() {
    recordHistory("Too high", "");
    high = guess - 1;
    makeGuess();
}

function correct() {
    let joke = "";
    if (guess === 67) {
        joke = `<div class="joke">Bruh, did you really pick 6..7 🤷?</div>`;
    }

    recordHistory("Correct!", "correct");

    document.getElementById("status").innerHTML =
        `AI guessed it in ${tries} tries!<br>${joke}`;
}

