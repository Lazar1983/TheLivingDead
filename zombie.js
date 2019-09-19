function Zombie(name) {

    this.name = name;
    this.health = getRandom(60,90);
    this.damage = getRandom(10,80);
    this.bite = calculatePercent(20,30);

    this.hasBite = function (human) {
        if (this.bite === true) {
            console.log(this.name + ` Has bite a ${human} `);
        }
    }

    this.hasBite();

}

Zombie.prototype = new Being();