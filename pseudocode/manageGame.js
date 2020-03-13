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

        let getCharacter = document.querySelector(".parent-container");
        getCharacter.innerHTML = '<img src="wireframes/characters/' + characterType.toLowerCase() + '.jpg" class="wireframes/characters"><div><h3>' + characterType + '</h3><p>Health: ' + player.health + '</p><p>Attack: ' + player.attack + '</p><p>Defense: ' + player.defense + '</p></div>';
    },

    setBattle: function () {

    },

}