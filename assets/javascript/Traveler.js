class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }

  hunt() {
    this.food += 2;
  }

  eat() {
    this.food > 0 ? this.food-- : (this.isHealthy = false);
  }
}

class Doctor extends Traveler {
  constructor(name) {
    super(name);
    this.food = 1;
    this.isHealthy = true;
  }

  heal(traveler) {
    traveler.isHealthy = true;
  }
}

class Hunter extends Traveler {
  constructor(name) {
    super(name);
    this.food = 2;
    this.isHealthy = true;
  }

  hunt() {
    this.food += 5;
  }

  eat() {
    if (this.food >= 2) this.food -= 2;
    else {
      this.food = 0;
      this.isHealthy = false;
    }
  }

  giveFood(traveler, amount) {
    if (this.food >= amount) {
      this.food -= amount;
      traveler.food += amount;
    }
  }
}
