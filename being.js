function Being() {
    this.isAlive = true;
    this.checkLife = function() {
        if (this.health <= 0) {
            console.log(this.name + " has died!")
            this.isAlive = false;
        }
    }
}