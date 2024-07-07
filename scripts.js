const characters = [
    "a wise old sage",
    "a treacherous merchant",
    "a loyal sidekick",
    "a cunning sorcerer",
    "a fierce warrior",
    "a stealthy rogue",
    "a noble knight",
    "a mysterious bard",
    "a vengeful spirit",
    "a disgraced noble",
    "a forgotten god",
    "a curious scholar",
    "a resourceful ranger",
    "a ruthless warlord",
    "a benevolent healer",
    "a renegade pirate",
    "a haunted paladin",
    "a mystical druid",
    "a charming swindler",
    "a fierce barbarian",
    "an enigmatic oracle",
    "a rebellious prince/princess",
    "a cursed blacksmith",
    "an exiled monarch",
    "a zealous cleric",
    "a devious assassin",
    "a wandering nomad",
    "a corrupted priest",
    "a holy knight",
    "a reclusive alchemist",
    "a determined hunter",
    "a playful trickster",
    "a brave adventurer",
    "a sinister necromancer",
    "a devoted monk",
    "a lost child",
    "an enchanted beast",
    "a fearless captain",
    "a time-traveling mage",
    "an ancient dragon",
    "a skilled artisan",
    "a tragic hero",
    "a wisecracking thief",
    "a silent guardian",
    "a cursed noble",
    "a daring explorer",
    "a forgotten hero",
    "a blind prophet",
    "a brave soldier",
    "a calculating tactician",
    "a wandering minstrel",
    "a fallen angel",
    "a stoic blacksmith",
    "a feral werewolf",
    "a gentle giant",
    "a paranoid scholar",
    "a jovial innkeeper",
    "a mischievous fae",
    "a ghostly apparition",
    "a heroic outlaw",
    "a loyal retainer",
    "a ruthless bounty hunter",
    "a patient gardener",
    "a wise hermit",
    "a cunning shapeshifter",
    "a vigilant watchman",
    "a conflicted spy",
    "a ghostly knight",
    "a shrewd politician",
    "a vengeful widow",
    "a daring smuggler",
    "a noble philanthropist",
    "a cursed artist",
    "a reformed villain",
    "a brave sailor",
    "an eccentric inventor",
    "a lost explorer",
    "a fierce gladiator",
    "a pacifist healer",
    "a corrupt judge",
    "a jovial bard",
    "a hardened mercenary",
    "a benevolent spirit",
    "a secretive librarian",
    "a wild druid",
    "a tortured artist",
    "a brave diplomat",
    "a fallen hero",
    "a loyal squire",
    "a shadowy figure",
    "a mysterious benefactor",
    "a determined farmer",
    "a noble defender",
    "a curious child",
    "a wise elder",
    "a fearless leader",
    "a jovial merchant",
    "a shamanistic healer",
    "a royal guard"
];

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

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

document.getElementById("generate-btn").addEventListener("click", function() {
    document.getElementById("character-card").innerText = getRandomElement(characters);
    document.getElementById("goal-card").innerText = getRandomElement(goals);
    document.getElementById("location-card").innerText = getRandomElement(locations);
    document.getElementById("obstacle-card").innerText = getRandomElement(obstacles);
    document.getElementById("twist-card").innerText = getRandomElement(twists);
});
