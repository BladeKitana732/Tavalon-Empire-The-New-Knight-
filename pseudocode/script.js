// pseudo code //code tests for gameplay 

//test of how to get data from characters


// code 1 test: Initialize class constructor for characters 

class character {
    constructor(health,attack,defense,special) {
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.special = special;
    }

    get getHealth() {
        return this.health;
    }


}


//code 2 test: object function (blueprint to run new variables through)
function Characters(name,health, attack, defense) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
}

//instance for code 2 test

let Necromancer = new Characters('Necromancer',100,20,50);

console.log(Necromancer)

 
 


//character selection 2 players

// functionality needed for user selection: 
// >make images draggable to characterChoice Box. 


// IF 2 player mode is selected with computer, just add functionality for computer to randomly make a choice in two cases: 1) when user makes a choice; 2) if user fails to make a choice and it randomizes choice for user. 

//text adventure code tests 

//test 1

const textElement = document.getElementById('text');
const buttonsElement = document.getElementById('choice-buttons');

//keeps track of choices made
let state = {};



function startJourney () {
    state = {},
    textNode(1)
}

//to ensure the current textNode index is what is being shown must set the id textNode equal to textNodeIndex parameter
//using method of .text on const textNode to pull journey state/path player is currently in the story game  
function textNode (textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.path === textNodeIndex)
    textElement.innerText = textNode.text;
    //while loop to show choices that affect THAT PATH ONLY (NOT EVERY PATH WILL HAVE 4 CHOICES) using child method b/c i made a choice button element (const buttonsElement) with a div and the buttons (child divs) is controlling node/story

    while(buttonsElement.firstChild) {
        buttonsElement.removeChild(buttonsElement.firstChild)

    }
    //this is going to pull choices needed to be seen only based on state/journey path with if statement & eventlistner
    textNode.choices.forEach(choice => {
        if(choiceSelection(choice)) {
            const button = document.createElement('button')
            button.innerText = choice.text
            button.classList.add('btn')
            button.addEventListener('click', () => choiceSelection(choice))
            buttonsElement.appendChild(button)
        }

    })




}

function choiceSelection (choice) {
    return true
}

//variable of paths and choices(it is an array with nested objects to go iterate through the paths with properties of path and text to show current stage in story mode and objects w/in these objects to iterate through the choices and next action)
const textNodes = [
    {
        path: 1,
        text: 'journey description',
        choices: [ 
            {
                text: 'choice 1',
                setState: {rightChoice: true},
                nextNode: 2
         },

         {
            text: 'choice 2',
            nextNode: 2,

         }
    
        ]

    }

]

startJourney();