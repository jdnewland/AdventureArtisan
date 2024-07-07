import { characters, goals, locations, obstacles, twists } from './data.js';

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function updateCard(cardId, content) {
    document.getElementById(cardId).innerText = content;
}

function generateSimplePrompt() {
    const goal = getRandomElement(goals);
    const location = getRandomElement(locations);
    const obstacle = getRandomElement(obstacles);
    const character = getRandomElement(characters);
    const twist = getRandomElement(twists);
    return {
        character,
        goal,
        location,
        obstacle,
        twist
    };
}

function generateWheelOfDestinyPrompt() {
    const character1 = getRandomElement(characters);
    const character2 = getRandomElement(characters);
    const goal1 = getRandomElement(goals);
    const goal2 = getRandomElement(goals);
    const location = getRandomElement(locations);
    const obstacle1 = getRandomElement(obstacles);
    const obstacle2 = getRandomElement(obstacles);
    const twist = getRandomElement(twists);
    return {
        character: `${character1} and ${character2}`,
        goal: `${goal1} and ${goal2}`,
        location,
        obstacle: `${obstacle1} and ${obstacle2}`,
        twist
    };
}

function generateBattleOfMindsPrompt() {
    const character1 = getRandomElement(characters);
    const character2 = getRandomElement(characters);
    const goal1 = getRandomElement(goals);
    const goal2 = getRandomElement(goals);
    const location = getRandomElement(locations);
    const obstacle = getRandomElement(obstacles);
    const twist = getRandomElement(twists);
    return {
        character: `${character1} vs ${character2}`,
        goal: `${goal1} vs ${goal2}`,
        location,
        obstacle,
        twist
    };
}

function generateFracturedSoulPrompt() {
    const character = getRandomElement(characters);
    const goal1 = getRandomElement(goals);
    const goal2 = getRandomElement(goals);
    const location = getRandomElement(locations);
    const obstacle = getRandomElement(obstacles);
    const twist = getRandomElement(twists);
    return {
        character,
        goal: `${goal1} or ${goal2}`,
        location,
        obstacle,
        twist
    };
}

document.getElementById("generate-btn").addEventListener("click", function() {
    const style = Math.floor(Math.random() * 4); // Select a random prompt style
    let result = {};

    switch (style) {
        case 1:
            result = generateWheelOfDestinyPrompt();
            break;
        case 2:
            result = generateBattleOfMindsPrompt();
            break;
        case 3:
            result = generateFracturedSoulPrompt();
            break;
        case 0:
        default:
            result = generateSimplePrompt();
            break;
    }

    const { character, goal, location, obstacle, twist } = result;
    updateCard("character-card", `Character(s): ${character}`);
    updateCard("goal-card", `Goal(s): ${goal}`);
    updateCard("location-card", `Location: ${location}`);
    updateCard("obstacle-card", `Obstacle: ${obstacle}`);
    updateCard("twist-card", `Twist: ${twist}`);

    // Make the cards visible
    document.getElementById("card-container").style.visibility = "visible";
});

// Add event listeners to each card for re-rolling
document.getElementById("character-card").addEventListener("click", () => {
    updateCard("character-card", `Character(s): ${getRandomElement(characters)}`);
});

document.getElementById("goal-card").addEventListener("click", () => {
    updateCard("goal-card", `Goal(s): ${getRandomElement(goals)}`);
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
