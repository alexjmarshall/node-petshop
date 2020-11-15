const { test, expect } = require('@jest/globals');

const Animal = require('../modules/Animal.js');

test("Asserts that an animal's initial age is a random number between 5 and 10", () => {
  let ages = [];
  for(let i = 0; i < 1000; i++) {
    const animal = Animal();
    ages.push(animal.getAge());
  }
  expect(Math.min(...ages)).toBeGreaterThanOrEqual(5);
  expect(Math.max(...ages)).toBeLessThanOrEqual(10);
});

test("Asserts that the Animal's speak method increments age after 5 calls", () => {
  const animal = Animal();
  const initialAge = animal.getAge();

  // mock console.log for testing
  const originalLog = console.log;
  console.log = () => {};

  animal.speak(); // 1
  animal.speak(); // 2
  animal.speak(); // 3
  animal.speak(); // 4
  animal.speak(); // 5
  expect(animal.getAge()).toEqual(initialAge + 1);

  // restore console.log to original function
  console.log = originalLog;
});

test("Asserts that getAverageNameLength returns correct value", () => {
  const animal = Animal();
  animal.setName('Garfield');
  animal.setName('Milo');
  animal.setName('Test');

  // 0 + 8 + 4 + 4 = 16 total. 16 / 4 = 4 average length
  expect(animal.getAverageNameLength()).toEqual(4);
});

test("Asserts that historical names are stored", () => {
  const animal = Animal();
  animal.setName('Garfield');
  animal.setName('Milo');
  animal.setName('Test');

  expect(animal.getNames().length).toEqual(4);
  expect(animal.getNames()).toContain(null);
  expect(animal.getNames()).toContain('Garfield');
  expect(animal.getNames()).toContain('Milo');
  expect(animal.getNames()).toContain('Test');
});
