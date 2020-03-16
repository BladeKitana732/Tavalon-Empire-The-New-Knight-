//declare global player variable to be ran to choose different character options
let player;

//function/method object? to be used in selecting player function/method object 
function Character(characterType, health, attack, defense) {
    this.characterType = characterType;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    // this.special = special; 
}

//global enemy variable 
let enemy;

function Opponent(opponentType, health, attack, defense) {
    this.opponentType = opponentType;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    // this.special = special; 
}