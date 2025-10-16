const stimuli = [
  { text: "A bat and a ball cost $1.10. The bat costs $1.00 more than the ball.", correct: false },
  { text: "5 machines take 5 minutes to make 5 widgets. 100 machines take 5 minutes to make 100 widgets.", correct: true },
  { text: "It takes 48 hours for water to freeze.", correct: false },
  { text: "If all roses are flowers and some flowers fade quickly, then some roses fade quickly.", correct: false },
  { text: "There are 12 months in a year.", correct: true }
];

let current = 0;
let score = 0;
const stimEl = document.getElementById("stimulus");
const fbEl = document.getElementById("feedback");
const trueBtn = document.getElementById("trueBtn");
const falseBtn = document.getElementById("falseBtn");

function showStimulus() {
  if (current >= stimuli.length) {
    endGame();
    return;
  }
  stimEl.textContent = stimuli[current].text;
  fbEl.textContent = "";
}

function handleAnswer(answer) {
  const correct = stimuli[current].correct === answer;
  if (correct) {
    score++;
    fbEl.textContent = "✅ Correct!";
  } else {
    fbEl.textContent = "❌ Incorrect!";
  }
  current++;
  setTimeout(showStimulus, 1000);
}

function endGame() {
  const accuracy = Math.round((score / stimuli.length) * 100);
  document.body.innerHTML = `
    <div class="game-container">
      <h2>Results</h2>
      <p>Your System 2 Accuracy: <strong>${accuracy}%</strong></p>
      <p>${accuracy > 70
        ? "You rely well on analytical (System 2) thinking!"
        : "Your intuitive (System 1) thinking dominated this round."}</p>
      <button class="btn" id="closeGame">Continue</button>
    </div>
  `;
  document.getElementById("closeGame").onclick = () => {
    // Send score back to main app if integrated
    window.parent.postMessage({ type: "gameComplete", game: "system1vs2", score: accuracy }, "*");
  };
}

trueBtn.onclick = () => handleAnswer(true);
falseBtn.onclick = () => handleAnswer(false);
showStimulus();
