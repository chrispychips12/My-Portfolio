document.getElementById('toggle-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('header, button, a, nav, p, main, .featured-project, .card, #contact, input, textarea, footer').forEach(function(element) {
        element.classList.toggle('dark-mode');
    });
});


document.getElementById('play-game').addEventListener('click', function() {
    let userChoice = prompt("Rock, Paper, or Scissors?");
    if (!userChoice) {
        return;
    }
    userChoice = userChoice.toLowerCase();

    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    alert(`You chose ${userChoice}. The computer chose ${computerChoice}. ${result}`);
});
