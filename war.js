function War (name) {
    this.humansArmy = [];
    this.zombieArmy = [];

    this.zombieAttack = function () {
        const human = this.humansArmy[getRandom(0, this.humansArmy.length - 1)];
        console.log(human);
        const zombie = this.zombieArmy[getRandom(0, this.zombieArmy.length - 1)];
        console.log(zombie);


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


    this.zombieAttack();
    this.generateHumans();
    this.generateZombies();
    
}