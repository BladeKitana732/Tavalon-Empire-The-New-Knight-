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

const textElement = document.getElementById('textElement');
const choiceButtons = document.getElementById('choice-buttons');

//keeps track of choices made
let state = {};



function startJourney () {
    state = {},
    textDisplay(1)
}

//to ensure the current textNode index is what is being shown must set the id textNode equal to textNodeIndex parameter
//using method of .text on const textNode to pull journey state/path player is currently in the story game  
function textDisplay (textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.path === textNodeIndex)
    textElement.innerText = textNode.text;
    //while loop to show choices that affect THAT PATH ONLY (NOT EVERY PATH WILL HAVE 4 CHOICES) using child method b/c i made a choice button element (const buttonsElement) with a div and the buttons (child divs) is controlling node/story

    while(buttonsElement.firstChild) {
        buttonsElement.removeChild(buttonsElement.firstChild)

    }
    //this is going to pull choices needed to be seen only based on state/journey path with if statement & eventlistner
    textNode.choice.forEach(choice => {
        if(showSelection(choice)) {
            const button = document.createElement('button')
            button.innerText = choice.text
            button.classList.add('btn')
            button.addEventListener('click', () => showSelection(choice))
            buttonsElement.appendChild(button)
        }

    })




}

//this function displays the current button options available based on the choice made by user properly and state(decision)
function showSelection (choice) {
    return choice.requiredState == null || choice.requiredState(state)
}

//this function to pull next textNode(path); takes current state and pulls from choice.setState to bring a brand new object for current state //nextTextNodeId is a const cause it is a parameter that will be ran through another function to pull this off
function selectChoice(choice) {
  const nextTextNodeId = choice.nextText
  state = Object.assign(state, choice.setState)
  textDisplay(nextTextNodeId)
}

//variable of paths and choices(it is an array with nested objects to go iterate through the paths with properties of path and text to show current stage in story mode and objects w/in these objects to iterate through the choices and next action)
const textNodes = [
    {
        path: 1,
        text: 'journey description',
        choice: [ 
            {
                text: 'clickme 1',
                setState: {rightChoice: true},
                nextNode: 2
         },

         {
            text: 'clickme 2',
            nextNode: 2,

         }
    
        ]

    },
    //if needed i can add a required function to make sure they right items are collected for next path 
    {
        path: 2,
        text: 'journey path2',
        choice: [ 
         {
            text: 'pathChoice1',
            requiredState: (currentState) => currentState.rightChoice,
            setState: {rightChoice: true, pathChoice1: true},
            nextNode: 3
         },

         {
            text: 'pathChoice2',
            requiredState: (currentState) => currentState.rightChoice,
            setState: {rightChoice: true, pathChoice2: true},
            nextNode: 3
         },

         {
            text: 'pathChoice3',
            // requiredState: (currentState) => currentState.rightChoice,
            // setState: {rightChoice: false, pathChoice3: true},
            nextNode: 3
         }

    
        ]

    }

]

startJourney();