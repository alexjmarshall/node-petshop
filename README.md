How to run:
1) Please ensure you have the latest stable versions of Node and npm.
2) Enter the command 'npm install'.
3) To run main.js, enter 'node main'.
4) To run petShop.js, enter 'node petShop'.
5) To run the tests, enter 'npm run test'.

This project contains the files Animal.js, Cat.js, Cat.test.js, Data.js, Dog.js, Dog.test.js, homework.sql, main.js and petShop.js.

The modules folder contains Animal.js, Cat.js, Dog.js and Data.js.

The Animal module contains getters and setters for the name, age and favorite food, as well as a method to speak a given or default message. The speak method increments the animal's age every 5 times it is called, using a speakerCounter variable and a check for divisibility by 5. It also stores historical names given and has a method to calculate their average length. It contains a helper function to generate a random integer between a given min and max integer, which is used to set the default age to a random number between 5 and 10 (inclusive).

The Cat and Dog modules extend Animal and replace the speak method to one with a default value of 'meow' and 'woof', respectively.

Data.js contains mock database methods, and homework.sql contains statements to create an Animal and AnimalNames table, as well as sample inserts. The AnimalNames table stores the historical names of animals with the corresponding Id of the animal from the Animal table. The current name of an Animal can then be queried by selecting for the highest Id with that Animal's Id from the AnimalNames table. (This solution does require that Animal Names are inserted in the correct order).

main.js contains informal testing of the modules created while working on Parts 1 and 2.

petShop.js contains a database transaction to save cats and dogs to the database. It uses a try/catch block to ensure that either all six animals are saved, or the entire transaction is rolled back if there is an error. It also has a logger function to store and print statements about the execution of the script, such as how long the transaction took to process.

The test folder contains Animal.test.js, Cat.test.js and Dog.test.js. These are Jest test suites. The test cases are:
"Asserts that an animal's initial age is a random number between 5 and 10"
"Asserts that the Animal's speak method increments age after 5 calls"
"Asserts that getAverageNameLength returns correct value"
"Asserts that historical names are stored"
"Asserts that the Cat's speak method is properly functioning"
"Asserts that the Dog's speak method is properly functioning"

The tests for the speak method mock the console.log function to verify that the methods are logging the correct output. The test for an animal's initial age generates it 1000 times and then verifies that the min and max values generated are between 5 and 10.

While modifying the Dog object from Cat, I decided to have both extend a parent Animal object.

I decided to implement the modules with closures rather than classes. Classes are more performant if a very large number of objects are being created from the same class. As this was not the case here, I decided this advantage was not significant.
