function Zombie(name) {
    this.name = name;
    this.health = getRandom(60,90);
    this.damage = getRandom(10,80);
    this.bite = calculatePercent(20);

    this.hasBiten = function(target) {
        if(target.bite = true) {
            target.health = 0;
            console.log(`${this.name} has bite`, target)
        } 
    }

}

Zombie.prototype = new Being();