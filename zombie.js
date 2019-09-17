function Zombie(name) {
    this.name = name;
    this.type = "Zombie";
    this.health = 100;
    this.bite = true;

    //generate zombies;

}

Zombie.prototype = new Being();