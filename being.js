function Being() {
    this.isAlive = true;

    this.checkLife = function() {
        if (this.health <= 0) {
            console.log(this.name + " has died!")
            this.isAlive = false;
        }
    }

    this.atack = function (target) {
        if(target.isAlive) {
            console.log("izede kutek", target);
            target.reciveDamage(this.damage);
        }
    }

    this.reciveDamage = function(damage) {
        this.health -= damage;
        this.checkLife();
    }

}