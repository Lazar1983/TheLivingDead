function War (name) {
    this.humansArmy = [];
    this.zombieArmy = [];

    this.generateHumansAndZombies = function () {
        for (let i = 0; i < getRandom(5,10); i++) {
            this.humansArmy.push(new Human(this.name));
        }
        for (let j = 0; j < getRandom(1,3); j++) {
            this.zombieArmy.push(new Zombie("Zombie" + j));
        }
    }

    
    this.zombieAttack = function () {

        for (let i = 0; i < this.humansArmy.length; i++) {
        let human = this.humansArmy[getRandom(0, this.humansArmy.length - 1)];
        let zombie = this.zombieArmy[getRandom(0, this.zombieArmy.length - 1)];
            if(human.isKilled(zombie)) {
                console.log(`${this.name} has killed`)
            }         
            for (let i = 0; i < this.zombieArmy.length; i++) {
            if(zombie.hasBiten(human)) {
                console.log(`${this.name} has biten`)
            }   
        }           
        } 



        


    }


   


    this.generateHumansAndZombies();

    
}