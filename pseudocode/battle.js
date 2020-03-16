//battle functioning testing

let user = {
    health: 100,
    defense: 100,
    power: 20
}

let enemy = {
    health: 100,
    defense: 100,
    power: 15
}

//attack function to call in button when clicked in HTML 
const attack = () => {
    let attackButton = document.getElementById('attack-button');
    
    attackButton.disabled = true;


    let userAttack = Math.floor(Math.random() * user.power);
    enemy.health -= userAttack;

    
    setTimeout(() => {
        let enemyAttack = Math.floor(Math.random() * enemy.power);
        user.health -= enemyAttack; 
        showInDom();
    }, 500);

    

    showInDom();
}




//empty function to call and show health in DOM
const showInDom = () => {

    document.getElementById('enemy-health').innerText =
    enemy.health;

    document.getElementById('user-health').innerText =
    user.health;

}

showInDom();