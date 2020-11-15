const Cat = require('./modules/Cat.js');
const Dog = require('./modules/Dog.js');
const Data = require('./modules/Data.js');

// Part 1
const cat = Cat();
console.log(`Name is currently ${cat.getName()}`);
cat.setName('Garfield');
console.log(`Name has been changed to ${cat.getName()}`);
const data = Data('database');
data.insert('Cat', cat);

// Part 2
// Modify the constructor to set the cat’s initial age to a random number between 5 and 10.
console.log(`Cat's age is: ${cat.getAge()}`);

// Modify the constructor to support an optional initial name for the new cat.
const daveTheCat = Cat('Dave');
console.log(`This new cat's name is ${daveTheCat.getName()}`);

// Add a method called speak() to make the cat say “meow” (use print or echo to speak).
cat.speak();

// Modify the new speak() method to accept an optional argument.
cat.speak('woof');

// Modify the setName() method to keep a list of all the names the cat has ever had.
// Create a getNames() method to return a list of all the names the cat has ever had.
console.log(`Cat's names have been: ${cat.getNames().toString()}`);
cat.setName('Milo');
console.log(`Cat's names have been: ${cat.getNames().toString()}`);

// Modify the class so that the cat’s age increases by 1 every five times it speaks.
cat.speak(); // 3
cat.speak(); // 4
console.log(`Cat's age is: ${cat.getAge()}`);
cat.speak(); // 5
console.log(`Cat's age is: ${cat.getAge()}`);

// Create a new method getAverageNameLength() that returns the average length of all the names the cat has ever had.
// cat's name lengths have been 0 (null), 8 (Garfield), and 4 (Mark) -- average should be 4
console.log(`Cat's average name length is: ${cat.getAverageNameLength()}`);

// Make a Dog object, making necessary dog-like changes.
const dog = Dog('Odie');
console.log(`Dog's name is ${dog.getName()}`);
dog.speak(); // 1
dog.speak(); // 2
dog.speak(); // 3
dog.speak(); // 4
console.log(`Dog's age is: ${dog.getAge()}`);
dog.speak(); // 5
console.log(`Dog's age is: ${dog.getAge()}`);
