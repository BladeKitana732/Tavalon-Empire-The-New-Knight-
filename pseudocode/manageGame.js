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
              setState: {kingdom: true},
              nextPath: 3
            },
          ]
        },
      
        {
          path: 2,
          text: 'On your ride on your stead you head to the forest to get materials to build a spear and collect food and water while at it. You come to a stump with a door too small for man but bigger than needed for an animal. You:',
          choices: [
            {
              text: 'Knock and see if anything is inside. ',
              requiredState: (currentState) => currentState.forest,
              setState: { knock: true, forest: false},
              nextPath: 4
      
            },
      
            {
              text: 'Gather material to build spear then head to nearest Kingdom.',
              requiredState: (currentState) => currentState.forest,
              setState: { buildSpear: true, forest: false},
              nextPath: 3
            },
      
            {
              text: 'Loot whatever is inside and head to the nearest Kingdom. ',
              nextPath: 3
            }
          ]
      
        },

        {
          path: 3,
          text: 'Finishing your spear and finding nothing to loot you approach a sign of a land untouched by you before. You read to yourself: Tavalon Empire. Where outsiders are not all that welcome. QUICK! You hear rustling around the corner wall infront of you, you: ',
          choices: [
            {
              text: 'Hide behind a tree in hopes no one takes your horse away.',
              requiredState: (currentState) => currentState.buildSpear,
              setState: {buildSpear: false, hide: true},
              nextPath: 5
            
            },

            {
              text: 'Await and announce yourself to whoever it may be. They might be able to be an ally.',
              requiredState: (currentState) => currentState.buildSpear,
              setState: { buildSpear: false, ally: true},
              nextPath: 5
            },

            {
              text: 'Rush out ready for battle to defend yourself.',
              requiredState: (currentState) => currentState.buildSpear,
              setState: { buildSpear: false, fight: true},
              nextPath: 5
            },
          ]
        }
      ]
      
      startJourney()