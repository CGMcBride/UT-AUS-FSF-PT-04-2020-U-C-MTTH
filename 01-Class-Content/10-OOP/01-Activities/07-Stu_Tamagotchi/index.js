function Character(name, sleepy, bored, age, outside, houseCondition) {
    // this.name = name;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.outside = false;
    this.houseCondition = houseConditio;
}

Character.prototype.isHungry = function () {
    if (this.sleepy > 0) {
        console.log(this.name + " is still alive!");
        console.log("\n-------------\n");
        return false;
    }
    console.log(this.name + " has died!");
    return false;
};