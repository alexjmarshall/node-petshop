const Animal = require('./Animal.js').Animal;

module.exports = (name, age, favoriteFood) => {
  const animal = Animal(name, age, favoriteFood);
  return({
    ...animal,
    speak: (message = 'meow') => animal.speak(message)
  })
}