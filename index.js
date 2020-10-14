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

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach =[];
}
  // ability to eat
  Person.prototype.eat = function (food) {
    if(this.stomach.length < 10)
      this.stomach.push(food);
  };
  
// ability to poop
  Person.prototype.poop = function(){
    this.stomach = [];
  };
  
  // to string
  Person.prototype.toString = function(){
    return(`${this.name}, ${this.age}`)
  };
   
  const personOne = new Person("Onaje", 47);
  const personTwo = new Person("Rudy", 56);
  const personThree = new Person("Kida", 42);
  

  console.log(personOne.toString());
  console.log(personTwo.toString());
  console.log(personThree.toString());
 
  personOne.eat("chicken");

  console.log(personOne.stomach);

  personOne.poop();

  console.log(personOne.stomach);
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

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon
  this.tank = 0;
  this.odometer = 0;
};
// ability to get fueled
Car.prototype.fill = function(gallons){
  if(this.tank < 20) 
    this.tank += gallons;
};
// ability to drive
Car.prototype.drive = function(miles) {
  if(this.tank >= 1)
  this.odometer += miles
  this.tank -= miles / this.milesPerGallon;

  if (this.tank <=0)
  this.tank = 0;

  if (this.tank ===0)
  return `I ran out of fuel at ${this.odometer} miles!`
  
};
/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);

Baby.prototype.eat = function(){

};

Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`
};

let babyOne = new Baby("trains");

console.log(babyOne.favoriteToy);
console.log(babyOne.eat())
console.log(babyOne.toString());
/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:

  1. window binding is where "this" is in the global environment, has no context, and refers to everything in the windows environment. It will return undefined in strict mode.

  2. Implicit binding - Most common and used about 80% of the time. Applies to objects with methods. When the function is invoked, whatever is to the left of the dot when the function is invoked is what "this" is referring to.

  3. Explicit binding - use a method like .call() to immediately invoke the function and pass in arguments one by one.
  .apply() immediately invokes the function and arguments are passed in as an array
  .bind() arguments are passed in one by one and does not immediately invoke the function

  4. New binding - when a new object is constructed and the "this" keyword is tied directly to it. When a function is invoked as a constructor function using the 'new' keyword 'this' points to the new object that is created.
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
