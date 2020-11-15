const { test, expect } = require('@jest/globals');

const Dog = require('../modules/Dog.js');

test("Asserts that the Dog's speak method is properly functioning", () => {
  // mock console.log for testing
  const originalLog = console.log;
  let consoleOutput = [];
  const mockedLog = output => consoleOutput.push(output);
  console.log = mockedLog;

  const dog = Dog();
  dog.speak();
  expect(consoleOutput).toContain('woof');
  dog.speak('ruff!');
  expect(consoleOutput).toContain('ruff!');

  // restore console.log to original function
  console.log = originalLog;
})
