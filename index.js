// @ts-nocheck
/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(attributes) {
  this.name = attributes.name;
  this.age = attributes.age;
  this.stomach = [];
}
Person.prototype.eat = function(someFood){
  if(this.stomach.length < 10){
    this.stomach.push(someFood);
  }else{
    console.log("I can't eat another bite.")
  }
};
Person.prototype.poop = function(){
  this.stomach = [];
}

Person.prototype.toString = function(){
  return (`Hi, my name is ${this.name}, and I am ${this.age} years old.`);
}

const newPerson1 = new Person({name:"Mary", age:50});
newPerson1.eat('Steak');
newPerson1.eat('potato');
newPerson1.eat('salad');
newPerson1.eat('app');
newPerson1.eat('wine');
newPerson1.eat('water');
newPerson1.eat('pie');
newPerson1.eat('coffee');
newPerson1.eat('roll');
newPerson1.eat('soup');
newPerson1.eat('chowder');


console.log(newPerson1);
console.log(newPerson1.toString());
// newPerson1.poop();
console.log(newPerson1)
console.log("");
/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(attributes) {
  this.model = attributes.model;
  this.milesPerGallon = attributes.milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function(gallons){
  this.tank += gallons; // '+=' take info from the left, adds info from the right and then pushes everything to the left.
}
Car.prototype.drive = function(milesDriven){
  const gasTank = Math.round(this.tank - milesDriven);
  const milesToGo = this.tank * this.milesPerGallon;

  if(gasTank > 0){
    this.tank = gasTank;
    this.odometer = this.odometer + milesDriven;
    return (`I can still go ${milesToGo} before running out of fuel.`);
  }else {
    this.tank = 0;
    this.odometer = milesToGo;
    return (`I ran out of fuel at ${this.odometer} miles!`);
  }
};

const newCar1 = new Car({model:'Bradley Tank', milesPerGallon:14});
newCar1.fill(56);
console.log(newCar1);
console.log(newCar1.drive(800));
console.log("");

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby (name, age, favoriteToy) {
  this.name=name;
  this.age=age;
  this.favoriteToy = favoriteToy;
}

Baby.prototype.play = function(){
  return (`${this.name} is playing with ${this.favoriteToy}.`)
}
Baby.prototype = Object.create(Person.prototype);

const newBaby1 = new Baby ({name:'james', age: 4, favoriteToy:'train'})
console.log(newBaby1)
/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. 
  2. 
  3. 
  4. 
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
