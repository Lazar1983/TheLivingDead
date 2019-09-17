function Human (name) {
    this.name = [];
    this.health = 100;
    this.weapons = [];



    this.getWeapon = function() {
        const weaponsArray = ["Knife", "Riffle", "Machete", "Pistol", "Baseball bat"]
        const randomWeapon = weaponsArray[getRandom(0,4)];
        this.weapons.push(randomWeapon);
    }

    // this.specialAttack = function () {
    //     this.weapons = 
    // }

    this.generateNames = function () {
        const namesArray = ["Alicia", "Jack", "Elena", "Lazar", "Stephan", "Troy", "Nick", "Ingrid", "Michelle", "Daryll"];
        const randomName = namesArray[getRandom(0,9)];
        this.name.push(randomName);
    }

    this.getWeapon();
    this.generateNames();



}

Human.prototype = new Being();