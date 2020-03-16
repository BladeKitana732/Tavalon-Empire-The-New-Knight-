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
  

//game start function/ need methods to create player in game and game play
//we can only call one function w/in onclick event. so must place other methods in game start method

let Game = {

    gameStart: function(characterType) {
        this.resetPlayer(characterType);
        
    },

    //using switch statement to run through character options and to easily break when selection has been made
    resetPlayer: function(characterType) {
        switch(characterType) {
            case "Necromancer" :
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


    const pathArray = [ {
      path: 1,
      text: 'You wake up in a forest with your noble stead from hiding from guards the night prior. Searching the hut you lost your weapon. Only enough coin left for food and one small weapon. You: ',
      choices: [
        {
          text: 'Take on the forest to build a weapon yourself and gather food and water.',
          setState: { forest: true },
          nextPath: 2
        },
        {
          text: 'Find nearest kingdom and buy what you can. You have traveled many lands, you are bound to meet someone you know along the way.',
          nextPath: 4
        }
      ]
    },


    {
      path: 2,
      text: 'Along the horse-ride you find a tree stump with a peculiar door. Too small for any human to fit through but bigger than needed for any creature that resides here. You: ',
      choices: [
        {
          text: 'Ignore it, build a weapon and head to kingdom',
          requiredState: (currentState) => currentState.forest,
          setState: { forest: false, stumpIgnored: true },
          nextPath: 4
        },
        {
          text: 'Try and loot through it and build weapon',
          requiredState: (currentState) => currentState.forest,
          setState: { forest: false, looting: true },
          nextPath: 3
        }
      ]
    },


    {
      path: 3,
      text: 'You are taken aback by a creature that was awaiting you to try and enter. With no weapon to defend yourself, you die. Uh oh. ',
      choices: [
        {
          text: 'Restart Journey',
          nextPath: -1
        }
      ]
    },


    {
      path: 4,
      text: 'You approach a land known as Tavalon Empire. Queen is adored by those ruled by her and are unweary about new faces. QUICK! You hear a rustling just behind the wall, you: ',
      choices: [
        {
          text: 'Announce yourself',
          setState: { stumpIgnored: false, announceSelf: true },
          nextPath: 5
        },

        {
          text: 'Hide and hope they do not steal your horse away.',
          setState: { stumpIgnored: false, hide: true },
          nextPath: 6
        }
    
      ]
    },


    {
      path: 5,
      text: 'You are greeted by a possible enemy who resides in Tavalon Empire, they challenge you to a battle to get through and meet the Queen. Your first move is to:  ',
      choices: [
        {
          text: 'Attack',
          requiredState: (currentState) => currentState.announceSelf,
          setState: {annouceSelf: false, preBattle: true },
          nextPath: 7
        },

        {
          text: 'Defend',
          requiredState: (currentState) => currentState.announceSelf,
          setState: {annouceSelf: false, preBattle: true },
          nextPath: 8
        },

        {
          text: 'Run away',
          nextPath: 10
        }
      ]
    },


    {
      path: 6,
      text: 'Behind the tree you see a potential enemy of the Tavalon Empire. They spot your horse and not shortly after spots you. Alarmed they prepare for battle. You: ',
      choices: [
        {
          text: 'Attack',
          requiredState: (currentState) => currentState.hide,
          setState: {hide: false, preBattle: true },
          nextPath: 7
        },

        {
          text: 'Surrender',
          requiredState: (currentState) => currentState.hide,
          setState: {hide: false, preBattle: true },
          nextPath: 10
        }
      ]
    },

    
    {
      path: 7,
      text: 'Battle your way to knighthood.',
      choices: [
        {
          text: 'Attack',
          requiredState: (currentState) => currentState.preBattle,
          nextPath: 11
        },

        {
          text: 'Defend',
          nextPath: 10
        },
       
        
      ]
    },

    {
      path: 8,
      text: 'Your attempts to defend can only go so far with this forest made weapon. It breaks 5th hit from enemy. You lose :(.',
      choices: [
        {
          text: 'Restart Journey',
          nextPath: -1
        }
      ]
    },

    // {
    //   path: 9,
    //   text: 'You foolishly thought this monster could be slain with a single sword.',
    //   choices: [
    //     {
    //       text: 'Restart Journey',
    //       nextPath: -1
    //     }
    //   ]
    // },

    {
      path: 10,
      text: 'No heart to fight on, as you run you are hit with an arrow. You lose :(.',
      choices: [
        {
          text: 'Restart Journey',
          nextPath: -1
        }
      ]
    },

    {
      path: 11,
      text: 'You got the enemy on their knees! You have proved your worth to be considered residency in Tavalon Empire! Your new ally takes you to see the Queen. You have been knighted! ',
      options: [
        {
          text: 'Congratulations. Play Again.',
          nextPath: -1
        }
      ]
    }
  ]

    
      
      startJourney()