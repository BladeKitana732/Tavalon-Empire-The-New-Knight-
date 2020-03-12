// pseudo code 

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


