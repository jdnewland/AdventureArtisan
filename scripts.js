import { characters, goals, locations, obstacles, twists } from './data.js';

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
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
    const style = document.getElementById("prompt-style").value;
    let result = {};

    switch (style) {
        case "complex":
            result = generateWheelOfDestinyPrompt();
            break;
        case "conflict":
            result = generateBattleOfMindsPrompt();
            break;
        case "soul":
            result = generateFracturedSoulPrompt();
            break;
        case "simple":
        default:
            result = generateSimplePrompt();
            break;
    }

    const { character, goal, location, obstacle, twist } = result;
    document.getElementById("character-card").innerText = `Character(s): ${character}`;
    document.getElementById("goal-card").innerText = `Goal(s): ${goal}`;
    document.getElementById("location-card").innerText = `Location: ${location}`;
    document.getElementById("obstacle-card").innerText = `Obstacle: ${obstacle}`;
    document.getElementById("twist-card").innerText = `Twist: ${twist}`;

    // Make the cards visible
    document.getElementById("card-container").style.visibility = "visible";
});