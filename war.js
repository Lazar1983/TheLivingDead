function War (name) {
    this.humans = [];
    this.zombies = [];

    this.isFighting = function () {
        for (let index = 0; index < this.humans.length; index++) {
            while(this.humans > 0) {
                this.weapons = this.zombies.health--;
            }
            if (this.bite = true) {

            }
        }
    }
    this.isFighting();

    this.killZombies = function () {
        while(this.zombies > 0) {
            
        }
    }

    this.generateHumans = function () {
        for (let i = 0; i < getRandom(5,10); i++) {
            this.humans.push(new Human(this.name));
        }
    }

    this.generateZombies = function () {
        for (let j = 0; j < getRandom(1,3); j++) {
            this.zombies.push(new Zombie("Zombie" + j));
        }
    }

    this.generateHumans();
    this.generateZombies();
}