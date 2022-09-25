class Player {
    constructor(name,type) {
        console.log('player',this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi, I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type){
        super(name,type)
        console.log('wizard',this);
    }
    play() {
        console.log(`Well! I'm a ${this.type}`);
    }
}

const wiz1 = new Wizard('Art','ender');
const wiz2 = new Wizard('Her','starter');
const non1 = new Player('Andrei','crawler');
