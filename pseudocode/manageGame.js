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


    const pathArray = [ {
      path: 1,
      text: 'You wake up in a forest with your noble stead from hiding from guards the night prior. Searching the hut you lost your weapon. Only enough coin left for food and one small weapon. You: ',
      choices: [
        {
          text: 'Take the forest to build a weapon yourself and gather food and water.',
          setState: { forest: true },
          nextPath: 2
        },
        {
          text: 'Find nearest kingdom and buy what you can. You have traveled many lands, you are bound to meet someone you know along the way.',
          nextPath: 3
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
          nextPath: 3
        },
        {
          text: 'Try and loot through it and head towards nearest kingdom',
          requiredState: (currentState) => currentState.blueGoo,
          setState: { blueGoo: false, shield: true },
          nextPath: 3
        },
        {
          text: 'Ignore the merchant',
          nextPath: 3
        }
      ]
    },


    {
      path: 3,
      text: 'After leaving the merchant you start to feel tired and stumble upon a small town next to a dangerous looking castle.',
      choices: [
        {
          text: 'Explore the castle',
          nextPath: 4
        },
        {
          text: 'Find a room to sleep at in the town',
          nextPath: 5
        },
        {
          text: 'Find some hay in a stable to sleep in',
          nextPath: 6
        }
      ]
    },


    {
      path: 4,
      text: 'You are so tired that you fall asleep while exploring the castle and are killed by some terrible monster in your sleep.',
      choices: [
        {
          text: 'Restart Journey',
          nextPath: -1
        }
      ]
    },


    {
      path: 5,
      text: 'Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.',
      choices: [
        {
          text: 'Restart Journey',
          nextPath: -1
        }
      ]
    },


    {
      path: 6,
      text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
      choices: [
        {
          text: 'Explore the castle',
          nextPath: 7
        }
      ]
    },

    
    {
      path: 7,
      text: 'While exploring the castle you come across a horrible monster in your path.',
      choices: [
        {
          text: 'Try to run',
          nextPath: 8
        },
        {
          text: 'Attack it with your sword',
          requiredState: (currentState) => currentState.sword,
          nextPath: 9
        },
        {
          text: 'Hide behind your shield',
          requiredState: (currentState) => currentState.shield,
          nextPath: 10
        },
        {
          text: 'Throw the blue goo at it',
          requiredState: (currentState) => currentState.blueGoo,
          nextPath: 11
        }
      ]
    },

    {
      path: 8,
      text: 'Your attempts to run are in vain and the monster easily catches.',
      choices: [
        {
          text: 'Restart Journey',
          nextPath: -1
        }
      ]
    },

    {
      path: 9,
      text: 'You foolishly thought this monster could be slain with a single sword.',
      choices: [
        {
          text: 'Restart Journey',
          nextPath: -1
        }
      ]
    },

    {
      path: 10,
      text: 'The monster laughed as you hid behind your shield and ate you.',
      choices: [
        {
          text: 'Restart Journey',
          nextPath: -1
        }
      ]
    },

    {
      path: 11,
      text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
      options: [
        {
          text: 'Congratulations. Play Again.',
          nextPath: -1
        }
      ]
    }
  ]

    
      
      startJourney()