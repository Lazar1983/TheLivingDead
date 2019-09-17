function Zombie(name) {
    this.name = name;
    this.health = 100;
    this.bite = true;


}

Zombie.prototype = new Being();