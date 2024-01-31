let ninja1 = {
    name: "Naruto",
    hp: 150,
    strength: 15,
    attack: function(target) {
        const isCritical = Math.random() < 0.1;
        const damage = isCritical ? 50 : Math.floor(Math.random() * (this.strength + 1));
        target.hp -= damage;
        console.log(`${this.name} attacks ${target.name} and does a damage of ${damage}${isCritical ? ' (CRITICAL HIT)!' : ''}! ${this.name} health: ${this.hp}. ${target.name} health: ${target.hp}`);
    }
};

let ninja2 = {
    name: "Sasuke",
    hp: 150,
    strength: 15,
    attack: function(target) {
        const isCritical = Math.random() < 0.1;
        const damage = isCritical ? 50 : Math.floor(Math.random() * (this.strength + 1));
        target.hp -= damage;
        console.log(`${this.name} attacks ${target.name} and does a damage of ${damage}${isCritical ? ' (CRITICAL HIT)!' : ''}! ${this.name} health: ${this.hp}. ${target.name} health: ${target.hp}`);
    }
};

function fight(ninja1, ninja2, rounds) {
    for (let roundNum = 1; roundNum <= rounds; roundNum++) {
        console.log(`===Round ${roundNum}===`);
        ninja1.attack(ninja2);
        if (ninja2.hp <= 0) {
            break;
        }
        ninja2.attack(ninja1);
        if (ninja1.hp <= 0) {
            break;
        }
    }
    if (ninja1.hp > ninja2.hp ) {
        console.log(`${ninja1.name} WINS!!!!!`);
    } else {
        console.log(`${ninja2.name} WINS!!!!!`);
    }        
}

fight(ninja1, ninja2, 10);
