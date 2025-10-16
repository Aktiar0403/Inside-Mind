class FunWorkingMemoryGame {
    constructor(onComplete) {
        this.onComplete = onComplete;
        this.sequence = [];
        this.userInput = [];
        this.currentStep = 0;
        this.maxSteps = 4; // Starting difficulty
        this.startGame();
    }

    startGame() {
        const container = document.getElementById("gameContainer");
        if (!container) {
            console.warn("Game container not found!");
            this.onComplete();
            return;
        }

        container.style.display = "flex";
        container.innerHTML = `<h2>🎮 Fun Memory Game!</h2>
                               <p>Memorize the sequence of emojis</p>
                               <div id="emojiDisplay" style="font-size:3rem; margin:20px;"></div>
                               <button id="startGameBtn" style="padding:10px 20px; font-size:1.2rem; margin-top:20px;">Start!</button>`;

        document.getElementById("startGameBtn").addEventListener("click", () => {
            this.nextRound();
        });
    }

    nextRound() {
        this.sequence = [];
        this.userInput = [];
        this.currentStep = 0;

        const emojis = ["😀","😎","🤓","🧐","😱","🤯","😇","🥳"];
        for (let i = 0; i < this.maxSteps; i++) {
            const randomIndex = Math.floor(Math.random() * emojis.length);
            this.sequence.push(emojis[randomIndex]);
        }

        this.showSequence();
    }

    showSequence() {
        const display = document.getElementById("emojiDisplay");
        let i = 0;

        const interval = setInterval(() => {
            display.innerHTML = this.sequence[i];
            i++;
            if (i >= this.sequence.length) {
                clearInterval(interval);
                display.innerHTML = "❓ Now repeat the sequence!";
                setTimeout(() => this.collectUserInput(), 500);
            }
        }, 800);
    }

    collectUserInput() {
        const display = document.getElementById("emojiDisplay");
        display.innerHTML = "";
        const container = document.getElementById("gameContainer");

        const emojis = ["😀","😎","🤓","🧐","😱","🤯","😇","🥳"];
        emojis.forEach(emoji => {
            const btn = document.createElement("button");
            btn.innerText = emoji;
            btn.style.fontSize = "2rem";
            btn.style.margin = "5px";
            btn.addEventListener("click", () => this.handleInput(emoji));
            display.appendChild(btn);
        });
    }

    handleInput(emoji) {
        this.userInput.push(emoji);
        if (this.userInput.length === this.sequence.length) {
            this.evaluate();
        }
    }

    evaluate() {
        const container = document.getElementById("gameContainer");
        const display = document.getElementById("emojiDisplay");

        let correct = true;
        for (let i = 0; i < this.sequence.length; i++) {
            if (this.sequence[i] !== this.userInput[i]) {
                correct = false;
                break;
            }
        }

        display.innerHTML = correct ? "🎉 Great memory!" : "😅 Oops! Try next time!";
        setTimeout(() => {
            container.style.display = "none";
            this.onComplete(); // Continue your psychometric test
        }, 2000);
    }
}
