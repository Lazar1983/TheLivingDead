function Zombie(name) {
    this.name = name;
    this.health = getRandom(60,90);
    this.damage = getRandom(10,80);
    this.isKilled = calculatePercent(80);
    this.recieveDamage = 0;

    this.headShot = function () {
        if (this.isKilled === true) {
            this.health = this.recieveDamage;
            console.log(` ${this.name} has been killed `);
        }
    }

    // this.headShot();

}

Zombie.prototype = new Being();