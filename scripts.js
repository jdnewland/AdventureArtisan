import { characters, goals, locations, obstacles, twists } from './data.js';

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function updateCard(cardId, content) {
    const card = document.getElementById(cardId);
    if (card) {
        card.innerText = content;
    }
}

function generateSimplePrompt() {
    const character = getRandomElement(characters);
    const goal = getRandomElement(goals);
    const location = getRandomElement(locations);
    const obstacle = getRandomElement(obstacles);
    const twist = getRandomElement(twists);
    return {
        character,
        goal,
        location,
        obstacle,
        twist
    };
}

document.getElementById("generate-btn").addEventListener("click", function() {
    const result = generateSimplePrompt();
    const { character, goal, location, obstacle, twist } = result;

    updateCard("character-card", `Character: ${character}`);
    updateCard("goal-card", `Goal: ${goal}`);
    updateCard("location-card", `Location: ${location}`);
    updateCard("obstacle-card", `Obstacle: ${obstacle}`);
    updateCard("twist-card", `Twist: ${twist}`);

    // Make the cards visible
    document.getElementById("card-container").style.visibility = "visible";
});

// Add event listeners to each card for re-rolling
document.getElementById("character-card").addEventListener("click", () => {
    updateCard("character-card", `Character: ${getRandomElement(characters)}`);
});

document.getElementById("goal-card").addEventListener("click", () => {
    updateCard("goal-card", `Goal: ${getRandomElement(goals)}`);
});

document.getElementById("location-card").addEventListener("click", () => {
    updateCard("location-card", `Location: ${getRandomElement(locations)}`);
});

document.getElementById("obstacle-card").addEventListener("click", () => {
    updateCard("obstacle-card", `Obstacle: ${getRandomElement(obstacles)}`);
});

document.getElementById("twist-card").addEventListener("click", () => {
    updateCard("twist-card", `Twist: ${getRandomElement(twists)}`);
});
