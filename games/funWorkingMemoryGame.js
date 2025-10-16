/* =========================
   funWorkingMemoryGame.js
   ========================= */

class FunWorkingMemoryGame {
    constructor(containerId, onComplete) {
        this.container = document.getElementById(containerId);
        this.onComplete = onComplete;
        this.sequence = [];
        this.userSequence = [];
        this.level = 1;
        this.maxLevel = 5;
        this.colors = ['🟥','🟦','🟩','🟨']; // fun emoji buttons
        this.startGame();
    }

    startGame() {
        this.container.innerHTML = `
            <div class="game-header" style="font-size:18px; font-weight:bold; color:#667eea;">🎯 Working Memory Challenge</div>
            <div id="gameMessage" style="margin:10px 0; font-size:16px;">Level ${this.level}</div>
            <div id="gameButtons" style="display:flex; gap:10px; margin:20px 0;"></div>
            <button id="skipLevelBtn" style="padding:5px 10px; background:#f6ad55; border:none; border-radius:5px; cursor:pointer;">Skip Level ⏭️</button>
        `;

        this.userSequence = [];
        this.generateSequence();
        this.renderButtons();
        this.playSequence();
        document.getElementById('skipLevelBtn').onclick = () => this.nextLevel();
    }

    generateSequence() {
        this.sequence = [];
        for (let i = 0; i < this.level + 2; i++) {
            const randIndex = Math.floor(Math.random() * this.colors.length);
            this.sequence.push(this.colors[randIndex]);
        }
    }

    renderButtons() {
        const buttonsDiv = document.getElementById('gameButtons');
        buttonsDiv.innerHTML = '';
        this.colors.forEach(color => {
            const btn = document.createElement('button');
            btn.innerText = color;
            btn.style.fontSize = '30px';
            btn.style.padding = '10px 15px';
            btn.style.cursor = 'pointer';
            btn.style.border = '2px solid #667eea';
            btn.style.borderRadius = '10px';
            btn.onclick = () => this.handleClick(color);
            buttonsDiv.appendChild(btn);
        });
    }

    async playSequence() {
        const msg = document.getElementById('gameMessage');
        msg.innerText = `Watch the sequence... 👀`;
        for (const color of this.sequence) {
            msg.innerText = color;
            await this.sleep(800);
            msg.innerText = '';
            await this.sleep(300);
        }
        msg.innerText = `Now repeat the sequence! 🖐️`;
    }

    handleClick(color) {
        this.userSequence.push(color);
        const msg = document.getElementById('gameMessage');
        if (this.userSequence[this.userSequence.length - 1] !== this.sequence[this.userSequence.length - 1]) {
            msg.innerText = `❌ Wrong! Sequence reset. Try again.`;
            this.userSequence = [];
            this.playSequence();
            return;
        }
        if (this.userSequence.length === this.sequence.length) {
            msg.innerText = `✅ Correct!`;
            setTimeout(() => this.nextLevel(), 1000);
        }
    }

    nextLevel() {
        if (this.level >= this.maxLevel) {
            this.container.innerHTML = `<div style="font-size:18px; color:green;">🎉 You completed the Working Memory Game!</div>`;
            if (this.onComplete) this.onComplete(this.level);
            return;
        }
        this.level++;
        this.startGame();
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Usage example:
// new FunWorkingMemoryGame('gameContainerId', (score) => console.log('Game done! Score:', score));
