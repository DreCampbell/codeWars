/*
7 Kyu
Two Fighters, One Winner

Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Your function also receives a third argument, a string, with the name of the fighter that attacks first.

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
class Fighter {
    #name;            get name()            { return this.#name; }
    #damagePerAttack; get damagePerAttack() { return this.#damagePerAttack; }

    constructor(name, health, damagePerAttack) {
      this.#name = name;
      this.#damagePerAttack = damagePerAttack;
      this.health = health;
    }
}

//PARAMETERS: two fighter objects with a name, their health points, and their damage given per attack

//RETURNS: the winner of the battle

//EXAMPLES: 
    (new Fighter("Lew", 10, 2), new Fighter("Harald", 10, 2), "Lew", "Lew");
    (new Fighter("Lew", 10, 2), new Fighter("Harald", 10, 2), "Harald", "Harald");
    (new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew", "Lew");
    (new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry", "Harry");
    (new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry", "Harald")
    (new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald", "Harald")
    (new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry", "Harald")
    (new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald", "Harald")

//PSEUDOCODE: 
*/

function declareWinner(fighter1, fighter2, firstAttacker){
    while(fighter1.health > 0 && fighter2.health > 0) {
        fighter2.health -= fighter1.damagePerAttack;
        fighter1.health -= fighter2.damagePerAttack;
    }

    if(fighter1.health <= 0 && fighter2.health <= 0){
        return firstAttacker;
    }else if(fighter1.health <= 0){
        return fighter2.name;
    }else{
        return fighter1.name;
    }
}

    (new Fighter("Lew", 10, 2), new Fighter("Harald", 10, 2), "Lew", "Lew");
    (new Fighter("Lew", 10, 2), new Fighter("Harald", 10, 2), "Harald", "Harald");
    (new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew", "Lew");
    (new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry", "Harry");
    (new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry", "Harald")
    (new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald", "Harald")
    (new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry", "Harald")
    (new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald", "Harald")

console.log(declareWinner())