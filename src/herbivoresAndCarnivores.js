'use strict';

class Animal {
  static alive = [];
  static die() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      Animal.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
