const namesArray = ["Alicia", "Jack", "Elena", "Lazar", "Stephan", "Troy", "Nick", "Ingrid", "Michelle", "Daryll"];
const weaponsArray = ["Knife", "Riffle", "Machete", "Pistol", "Baseball bat"];

function Human (name) {
    this.name = namesArray[getRandom(0, (namesArray.length - 1))];
    this.weapons = weaponsArray[getRandom(0, (weaponsArray.length - 1))];
    this.health = getRandom(85,100);
    this.damage = getRandom(90,100);




}

Human.prototype = new Being();