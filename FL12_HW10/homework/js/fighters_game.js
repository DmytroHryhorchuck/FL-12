function Fighter(fighterObj) {
  fighterObj.wins = 0;
  fighterObj.loses = 0;
  fighterObj.health = fighterObj.hp;
    this.getName = function getName() {
    return fighterObj.name;
  };
  this.getDamage = function getDamage () {
    return fighterObj.damage;
  };
  this.getHealth = function getHealth () {
    return fighterObj.health;
  };
this.getStrength = function getStrength () {
  return fighterObj.strength;
};
this.getAgility = function getAgility () {
  return fighterObj.agility;
};
this.attack = function attack (defender) {
   let probabilityOfSuccess = defender.getAgility() + defender.getStrength();
  let randomPercent = Math.floor(Math.random() * 101);
  if (randomPercent > probabilityOfSuccess) {
    defender.dealDamage(this.getDamage());
        console.log(`${fighterObj.name} mackes ${fighterObj.damage} damage to ${defender.getName()}`);          
  } else {
    console.log(`${fighterObj.name} attack missed`)
  }
}
this.logCombatHistory = function logCombatHistory (){
console.log(`Name: ${fighterObj.name}, Wins: ${fighterObj.wins}, Losses: ${fighterObj.loses}`) 
}
this.heal = function heal (amountOfHealth) {
  fighterObj.health = Math.min(0, fighterObj.health - amountOfHealth )
}
this.dealDamage = function dealDamage (amountDamage){
  fighterObj.health = Math.max(0, fighterObj.health - amountDamage);
}
this.addWin = function addWin(){
  fighterObj.wins++
}
this.addLoss = function addLoss(){
  fighterObj.loses++
}
} 
function battle(...fightersOblects){
  for (let fighter of fightersOblects) {
    if (!fighter.getHealth()) {
      console.log(`${fighter.getName()} is dead and can't fight`);
      return;
    }
  }
  let aliveFighter = 0;
  while (fightersOblects[aliveFighter].getHealth()) {
    fightersOblects[aliveFighter].attack(fightersOblects[1 - aliveFighter]);
    aliveFighter = 1 - aliveFighter;
  }
  console.log(`${fightersOblects[1-aliveFighter].getName()} has won!`);
  fightersOblects[1 - aliveFighter].addWin();
  fightersOblects[aliveFighter].addLoss();
  }

const myFighter = new Fighter(
    {name: 'Maximus', 
    damage: 25, 
    hp: 100, 
    strength: 30, 
    agility: 25
}); 
const myFighter2 = new Fighter(
    {name: 'Commodus', 
    damage: 25, 
    hp: 100, 
    strength: 25, 
    agility: 20
})


