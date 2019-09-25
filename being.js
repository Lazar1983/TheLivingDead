function Being() {
    this.isAlive = true;
    this.reciveDamage = 0;

    this.checkLife = function() {
        if (this.health <= 0) {
            console.log(`${this.name} has died!`)
            this.isAlive = false;
        }
    }
    
    // this.attack = function (target) {
    //     if(target.isAlive) {
    //         console.log("izede kutek", target);
    //         target.health = this.reciveDamage;
    //     }
    // }


}