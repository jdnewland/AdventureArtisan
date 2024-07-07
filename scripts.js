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
       prompt: `The party ${goal} ${location} ${obstacle}, aided by ${character} ${twist} .`,
        cards: { character, goal, location, obstacle, twist }
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
        prompt: `The party, led by ${character1} and ${character2}, ${goal1} and ${goal2} ${location}. They face ${obstacle1} and ${obstacle2}. ${twist}`,
        cards: { character: `${character1} and ${character2}`, goal: `${goal1} and ${goal2}`, location, obstacle: `${obstacle1} and ${obstacle2}`, twist }
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
        prompt: `The party must navigate the conflict between ${character1} who ${goal1} and ${character2} who ${goal2}. Both are heading towards ${location} where they face ${obstacle}. ${twist}`,
        cards: { character: `${character1} and ${character2}`, goal: `${goal1} and ${goal2}`, location, obstacle, twist }
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
        prompt: `The party, guided by ${character}, must choose between ${goal1} and ${goal2} ${location}. They face an obstacle ${obstacle} that forces a critical decision. ${twist}`,
        cards: { character, goal: `${goal1} and ${goal2}`, location, obstacle, twist }
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

    const { prompt, cards } = result;
    document.getElementById("character-card").innerText = cards.character;
    document.getElementById("goal-card").innerText = cards.goal;
    document.getElementById("location-card").innerText = cards.location;
    document.getElementById("obstacle-card").innerText = cards.obstacle;
    document.getElementById("twist-card").innerText = cards.twist;

    document.getElementById("adventure-prompt").innerText = prompt;

    // Make the cards visible
    document.getElementById("card-container").style.visibility = "visible";
});
