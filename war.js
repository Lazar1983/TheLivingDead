function War (name) {
    this.humans = [];
    this.zombies = [];

    console.log(this.humans);
    console.log(this.zombies);

    this.isFighting = function () {
        for (let index = 0; index < this.humans.length; index++) {
            const victim = false;
            while (this.zombies > 0) {
                if(this.isAlive) {
                    if(this.headShot) {
                        this.zombies = victim;
                    }
                }
            }
        }
    }
 
    this.generateHumans = function () {
        for (let i = 0; i < getRandom(5,10); i++) {
            this.humans.push(new Human("Human" + i));
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