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

function arrangeCards(style) {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = ''; // Clear the card container

    switch (style) {
        case 'simple':
            cardContainer.appendChild(document.getElementById('character-card'));
            cardContainer.appendChild(document.getElementById('goal-card'));
            cardContainer.appendChild(document.getElementById('location-card'));
            cardContainer.appendChild(document.getElementById('obstacle-card'));
            cardContainer.appendChild(document.getElementById('twist-card'));
            break;
        case 'wheel':
            cardContainer.appendChild(document.getElementById('character-card'));
            cardContainer.appendChild(document.getElementById('character-card-2'));
            cardContainer.appendChild(document.getElementById('goal-card'));
            cardContainer.appendChild(document.getElementById('goal-card-2'));
            cardContainer.appendChild(document.getElementById('location-card'));
            cardContainer.appendChild(document.getElementById('obstacle-card'));
            cardContainer.appendChild(document.getElementById('obstacle-card-2'));
            cardContainer.appendChild(document.getElementById('twist-card'));
            break;
        case 'battle':
            cardContainer.appendChild(document.getElementById('character-card'));
            cardContainer.appendChild(document.getElementById('character-card-2'));
            cardContainer.appendChild(document.getElement**Updated JavaScript**

```javascript
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

function arrangeCards(style) {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = ''; // Clear the card container

    switch (style) {
        case 'simple':
            cardContainer.appendChild(document.getElementById('character-card'));
            cardContainer.appendChild(document.getElementById('goal-card'));
            cardContainer.appendChild(document.getElementById('location-card'));
            cardContainer.appendChild(document.getElementById('obstacle-card'));
            cardContainer.appendChild(document.getElementById('twist-card'));
            break;
        case 'wheel':
            cardContainer.appendChild(document.getElementById('character-card'));
            cardContainer.appendChild(document.getElementById('character-card-2'));
            cardContainer.appendChild(document.getElementById('goal-card'));
            cardContainer.appendChild(document.getElementById('goal-card-2'));
            cardContainer.appendChild(document.getElementById('location-card'));
            cardContainer.appendChild(document.getElementById('obstacle-card'));
            cardContainer.appendChild(document.getElementById('obstacle-card-2'));
            cardContainer.appendChild(document.getElementById('twist-card'));
            break;
        case 'battle':
            cardContainer.appendChild(document.getElementById('character-card'));
            cardContainer.appendChild(document.getElementById('character-card-2'));
            cardContainer.appendChild(document.getElementById('goal-card'));
            cardContainer.appendChild(document.getElementById('location-card'));
            cardContainer.appendChild(document.getElementById('obstacle-card'));
            cardContainer.appendChild(document.getElementById('twist-card'));
            break;
        case 'soul':
            cardContainer.appendChild(document.getElementById('character-card'));
            cardContainer.appendChild(document.getElementById('goal-card'));
            cardContainer.appendChild(document.getElementById('goal-card-2'));
            cardContainer.appendChild(document.getElementById('location-card'));
            cardContainer.appendChild(document.getElementById('obstacle-card'));
            cardContainer.appendChild(document.getElementById('twist-card'));
            break;
    }
}

document.getElementById("generate-btn").addEventListener("click", function() {
    const style = document.getElementById('prompt-style').value;
    let result = {};

    switch (style) {
        case 'wheel':
            result = generateWheelOfDestinyPrompt();
            break;
        case 'battle':
            result = generateBattleOfMindsPrompt();
            break;
        case 'soul':
            result = generateFracturedSoulPrompt();
            break;
        case 'simple':
        default:
            result = generateSimplePrompt();
            break;
    }

    const { character, goal, location, obstacle, twist } = result;
    updateCard("character-card", `Character(s): ${character}`);
    updateCard("character-card-2", `Character(s): ${character}`);
    updateCard("goal-card", `Goal(s): ${goal}`);
    updateCard("goal-card-2", `Goal(s): ${goal}`);
    updateCard("location-card", `Location: ${location}`);
    updateCard("obstacle-card", `Obstacle: ${obstacle}`);
    updateCard("obstacle-card-2", `Obstacle: ${obstacle}`);
    updateCard("twist-card", `Twist: ${twist}`);

    // Arrange cards based on the selected style
    arrangeCards(style);

    // Make the cards visible
    document.getElementById("card-container").style.visibility = "visible";
});

// Add event listeners to each card for re-rolling
document.getElementById("character-card").addEventListener("click", () => {
    updateCard("character-card", `Character(s): ${getRandomElement(characters)}`);
});

document.getElementById("character-card-2").addEventListener("click", () => {
    updateCard("character-card-2", `Character(s): ${getRandomElement(characters)}`);
});

document.getElementById("goal-card").addEventListener("click", () => {
    updateCard("goal-card", `Goal(s): ${getRandomElement(goals)}`);
});

document.getElementById("goal-card-2").addEventListener("click", () => {
    updateCard("goal-card-2", `Goal(s): ${getRandomElement(goals)}`);
});

document.getElementById("location-card").addEventListener("click", () => {
    updateCard("location-card", `Location: ${getRandomElement(locations)}`);
});

document.getElementById("obstacle-card").addEventListener("click", () => {
    updateCard("obstacle-card", `Obstacle: ${getRandomElement(obstacles)}`);
});

document.getElementById("obstacle-card-2").addEventListener("click", () => {
    updateCard("obstacle-card-2", `Obstacle: ${getRandomElement(obstacles)}`);
});

document.getElementById("twist-card").addEventListener("click", () => {
    updateCard("twist-card", `Twist: ${getRandomElement(twists)}`);
});
