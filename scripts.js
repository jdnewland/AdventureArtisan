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

function updateAdventures(result) {
    const { character, goal, location, obstacle, twist } = result;

    const explorationAdventure = `The adventurers, guided by ${character}, seek to ${goal} in the mysterious ${location}, overcoming ${obstacle}, and are unexpectedly faced with ${twist}.`;
    const conflictAdventure = `Led by ${character}, the group aims to ${goal} at ${location}, battling through ${obstacle}, only to encounter ${twist} that complicates their mission.`;
    const discoveryAdventure = `Driven by ${character}, the team strives to ${goal} at the ancient ${location}, navigating ${obstacle}, and uncovering ${twist} that changes their course.`;
    const rescueAdventure = `${character} leads the charge to ${goal} within the perilous ${location}, overcoming ${obstacle}, while dealing with ${twist} that threatens their success.`;

    document.getElementById("exploration-adventure").innerText = explorationAdventure;
    document.getElementById("conflict-adventure").innerText = conflictAdventure;
    document.getElementById("discovery-adventure").innerText = discoveryAdventure;
    document.getElementById("rescue-adventure").innerText = rescueAdventure;
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

    // Update the adventure examples
    updateAdventures(result);
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
