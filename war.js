function War (name) {
    this.humansArmy = [];
    this.zombieArmy = [];


    this.zombieAttack = function () {
        let human = this.humansArmy[getRandom(0, this.humansArmy.length - 1)];
        let zombie = this.zombieArmy[getRandom(0, this.zombieArmy.length - 1)];

        while(this.humansArmy >= 0 || this.zombieArmy >= 0) {

            if(this.humansArmy >= 0 || this.zombieArmy > 0) {
                zombie.hasBiten();
                human.headShot();
                console.log(`Human has biten and dead`);
            } 
        }
    }
   
    this.generateHumans = function () {
        for (let i = 0; i < getRandom(5,10); i++) {
            this.humansArmy.push(new Human(this.name));
        }
    }

    this.generateZombies = function () {
        for (let j = 0; j < getRandom(1,3); j++) {
            this.zombieArmy.push(new Zombie("Zombie" + j));
        }
    }

    this.generateHumans();
    this.generateZombies();
    
}