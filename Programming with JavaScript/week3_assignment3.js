//Array and Object Iteration
// Step 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
  for (var item of dairy) {
    console.log(item);
  }
}

logDairy();

// Step 2
const animal = {
  canJump: true
};

const bird = Object.create(animal);

bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for (var [prop, value] of Object.entries(bird)) {
    console.log(`${prop}: ${value}`);
  }
}

birdCan();

// Step 3
function animalCan() {
  for (var prop in bird) {
    console.log(`${prop}: ${bird[prop]}`);
  }
}

animalCan();
