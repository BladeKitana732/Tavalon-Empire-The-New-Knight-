//game start function/ need methods to create player in game and game play
//we can only call one function w/in onclick event. so must place other methods in game start method

let Game = {

    gameStart: function(characterType) {
        this.resetPlayer(characterType);
        this.setBattle();
    },

    //using switch statement to run through character options and to easily break when selection has been made
    resetPlayer: function(characterType) {
        switch(characterType) {
            case "Necromancer":
                player = new Character(characterType,100,30,60);
                break;
            case "Healer":
                player = new Character(characterType,150,25,70);
                break;
            case "Warrior" :
                player = new Character(characterType,100,30,60);
                break;
            case "Archer" :
                player = new Character(characterType,100,30,70);
                break;
        }
        //variable to link with html div id="character boxes"

        let getCharacter = document.querySelector(".wrapper");
        getCharacter.innerHTML = '<img src="wireframes/characters/' + characterType.toLowerCase() + '.jpg" class="wireframes/characters"><div><h3>' + characterType + '</h3><p>Health: ' + player.health + '</p><p>Attack: ' + player.attack + '</p><p>Defense: ' + player.defense + '</p></div>';
    },

    setBattle: function () {

    },

}


//story html functionality 

const textElement = document.getElementById('textElement');
const choiceButtonsElement = document.getElementById('choice-buttons');

let state = {};

function startJourney() {
    state = {}
    pathArrayDisplay(1)
    
  }

  function showSelection(choice) {
    return choice.requiredState == null || choice.requiredState(state)
  }

  
  function choiceSelection(choice) {  
    const nextPathNum = choice.nextPath
    state = Object.assign(state, choice.setState)
    pathArrayDisplay(nextPathNum)
  }


  function pathArrayDisplay(arrayIndex) {
    const selection = pathArray.find(selection => selection.path === arrayIndex)
    textElement.innerText = selection.text
    while(choiceButtonsElement.firstChild) {
        choiceButtonsElement.removeChild(choiceButtonsElement.firstChild)
      }

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


    const pathArray = [
        {
          path: 1,
          text: 'You and your noble stead awake in a forest where you rested from guards the night prior. Going through the hut you find you lost your weapon! Oh no. You decide to:',
          choices: [
            {
              text: 'Go through forest to build one.',
              setState: { forest: true},
              nextPath: 2,
            },
      
            {
              text: 'Sneak into next kingdom and use money left to buy one.',
              nextPath: 2
            },
          ]
        },
      
        {
          path: 2,
          text: '',
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