exports.Animal = (name = null, age = randomInt(5, 10), favoriteFood = null) => {
  let names = [];
  names.push(name);
  let speakCounter = 0;

  return ({
    getName: () => names[names.length - 1],
    getNames: () => names,
    getAge: () => age,
    getFavoriteFood: () => favoriteFood,
    setName: newName => names.push(newName),
    setAge: newAge => age = newAge,
    setFavoriteFood: newFavoriteFood => favoriteFood = newFavoriteFood,
    speak: (message = null) => {
      speakCounter++;
      speakCounter % 5 == 0 && age++;
      console.log(message);
    },
    getAverageNameLength: () => names.map(n => n ? n.length : 0).reduce((a,b) => (a + b)) / names.length
  })
}

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
