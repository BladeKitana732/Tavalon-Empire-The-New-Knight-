// pseudo code //code tests for gameplay 

//test of how to get data from characters


// code 1 test: Initialize class constructor for characters 

class character {
    constructor(health,attack,defense,) {
        this.health = health;
        this.attack = attack;
        this.defense = defense;

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
const choiceButtonsElement = document.getElementById('choice-buttons');

//keeps track of choices made
let state = {};


//starts game
function startJourney() {
    state = {}
    pathArrayDisplay(1)
    
  }

  //this function is to ensure i am only displaying the choices that are needed choose from 
  function showSelection(choice) {
    return choice.requiredState == null || choice.requiredState(state)
  }
  
  //this function is to ensure that AFTER player makes selection, it will continue on with journey with current choices based on current path number it is on. 
  function choiceSelection(choice) {  
    const nextPathNum = choice.nextPath
    state = Object.assign(state, choice.setState)
    pathArrayDisplay(nextPathNum)
  }
  
  //this function is to pull the information from the array to be able to display selections/choices based on current path in DOM
  function pathArrayDisplay(arrayIndex) {
    const selection = pathArray.find(selection => selection.path === arrayIndex)
    textElement.innerText = selection.text
    
//while loop to remove all options to add options that are needed only
    while(choiceButtonsElement.firstChild) {
      choiceButtonsElement.removeChild(choiceButtonsElement.firstChild)
    }
  
//pulling selection variable which holds the data of text needed to be displayed for choice selections with event listener to newly created button element to call choices properly through each selection 
    selection.choices.forEach(choice => {
      if(showSelection(choice)){
        const button = document.createElement('button')
        button.innerText = choice.text
        button.classList.add('btn')
        button.addEventListener('click', () => choiceSelection(choice))
        choiceButtonsElement.appendChild(button)
      }
    })
  }
  
  //array of path objects with nested objects for buttons/selections needed to be made for user to continue journey
  const pathArray = [
    {
      path: 1,
      text: 'path1',
      choices: [
        {
          text: 'button1',
          setState: { choice1: true},
          nextPath: 2,
        },
  
        {
          text: 'button2',
          nextPath: 2
        },
      ]
    },
  
    {
      path: 2,
      text: 'path2',
      choices: [
        {
          text: 'path2button1',
          requiredState: (currentState) => currentState.choice1,
          setState: {path2text: true, choice1: false},
          nextPath: 3
  
        },
  
        {
          text: 'path2button2',
          requiredState: (currentState) => currentState.choice1,
          setState: {path2text: true, choice1: false},
          nextPath: 3
        },
  
        {
          text: 'path2button3',
          nextPath: 3
        }
      ]
  
    }
  ]
  
  startJourney()

  //battle

  setBattle: function () {

  },