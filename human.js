const namesArray = ["Alicia", "Jack", "Elena", "Lazar", "Stephan", "Troy", "Nick", "Ingrid", "Michelle", "Daryll"];
const weaponsArray = ["Knife", "Riffle", "Machete", "Pistol", "Baseball bat"];

function Human (name) {
    this.name = namesArray[getRandom(0, (namesArray.length - 1))];
    this.weapons = weaponsArray[getRandom(0, (weaponsArray.length - 1))];
    this.health = getRandom(85,100);
    this.damage = getRandom(90,100);
    this.isBitten = calculatePercent(20);
    this.recieveDamage = 0;


    this.isKilledZombie = function () {
        const damage = 100;
        
    }

    this.hasBiten = function () {
        if (this.isBitten === true) {
            this.health = this.recieveDamage;
            console.log(` ${this.name} has been biten and died `);
        }
    }

    this.hasBiten();

    

}

Human.prototype = new Being();