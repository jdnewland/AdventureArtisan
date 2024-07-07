const goals = [
    "must retrieve a lost artifact",
    "need to rescue a captured ally",
    "are tasked to uncover an ancient secret"
];

const locations = [
    "in an abandoned castle",
    "within a bustling underground market",
    "deep in a mysterious forest"
];

const obstacles = [
    "guarded by undead warriors",
    "trapped with deadly puzzles",
    "hunted by rival adventurers"
];

const twists = [
    "where allies turn into enemies",
    "as a powerful storm disrupts plans",
    "when a long-lost mentor reappears"
];

const characters = [
    "a wise old sage",
    "a treacherous merchant",
    "a loyal sidekick",
    "a cunning sorcerer"
];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

document.getElementById("generate-btn").addEventListener("click", function() {
    document.getElementById("goal-card").innerText = getRandomElement(goals);
    document.getElementById("location-card").innerText = getRandomElement(locations);
    document.getElementById("obstacle-card").innerText = getRandomElement(obstacles);
    document.getElementById("twist-card").innerText = getRandomElement(twists);
    document.getElementById("character-card").innerText = getRandomElement(characters);
});
