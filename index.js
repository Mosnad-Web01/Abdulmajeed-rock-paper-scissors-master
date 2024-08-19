document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const rules = {
        rock: ['scissors', 'lizard'],
        paper: ['rock', 'spock'],
        scissors: ['paper', 'lizard'],
        lizard: ['spock', 'paper'],
        spock: ['scissors', 'rock'],
    };
    
    const scoreElement = document.getElementById('score');
    let score = 12;
    function getHouseChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
    }
    function determineWinner(playerChoice, houseChoice) {
        if (playerChoice === houseChoice) {
            return 'draw';
        }
        if (rules[playerChoice].includes(houseChoice)) {
            return 'win';
        } else {
            return 'lose';
        }
    }
    function updateScore(result) {
        if (result === 'win') {
            score += 1;
        } else if (result === 'lose') {
            score -= 1;
        }
        scoreElement.textContent = score;

    }
    function playRound(playerChoice) {
        const houseChoice = getHouseChoice();
        const result = determineWinner(playerChoice, houseChoice);
        document.getElementById("result").innerText = `You picked ${playerChoice}. The computer picked ${houseChoice}. You ${result}`;
        updateScore(result);
        
    }
    document.querySelectorAll('.choice').forEach(button => {
        button.addEventListener('click', () => {
            const playerChoice = button.dataset.choice;
            playRound(playerChoice);
        });
    });
     const rulesModal = document.getElementById('rules-modal');
    const rulesButton = document.getElementById('rules');
    const closeModalButton = document.getElementById('close-modal');
    rulesButton.addEventListener('click', () => {
        rulesModal.classList.remove('hidden');
    });

    closeModalButton.addEventListener('click', () => {
        rulesModal.classList.add('hidden');
    });
    window.addEventListener('click', (event) => {
        if (event.target === rulesModal) {
            rulesModal.classList.add('hidden');
        }
    });
    document.getElementById("play-again").addEventListener('click',()=>{
      window.location.reload();
    });
});
