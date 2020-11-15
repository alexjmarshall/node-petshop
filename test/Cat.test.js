const { test, expect } = require('@jest/globals');

const Cat = require('../modules/Cat.js');

test("Asserts that the Cat's speak method is properly functioning", () => {
  // mock console.log for testing
  const originalLog = console.log;
  let consoleOutput = [];
  const mockedLog = output => consoleOutput.push(output);
  console.log = mockedLog;

  const cat = Cat();
  cat.speak();
  expect(consoleOutput).toContain('meow');
  cat.speak('rawr!');
  expect(consoleOutput).toContain('rawr!');

  // restore console.log to original function
  console.log = originalLog;
});
