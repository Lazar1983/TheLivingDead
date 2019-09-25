function main() {
    const livingDead = new War("The Living Dead");
    console.log(livingDead);
    const war = livingDead.zombieAttack();
    while(war) {
        console.log("War has ended" , livingDead);
    }

}

main();