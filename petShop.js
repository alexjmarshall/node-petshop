const Cat = require('./modules/Cat.js');
const Dog = require('./modules/Dog.js');
const Data = require('./modules/Data.js');

const logger = (() => {
  let logged = '';
  return ({
    log: msg => logged = logged + msg + '\n',
    print: () => logged.trim()
  })
})();

const saveTest = () => {
  logger.log('Starting saveTest()...');
  const db = Data('deebee1');

  const cat = Cat('Milo');
  db.insert('Cats', cat);

  const dog = Dog('Otis');
  db.insert('Dogs', dog);

  logger.log('Inserted Milo & Otis into database');
}

const savePetShop = async () => {
  logger.log('Starting savePetShop()...');
  const cats = [Cat(), Cat(), Cat()];
  const dogs = [Dog(), Dog(), Dog()];
  const db = Data('deebee2');

  logger.log('Beginning db transaction...');
  const start = Date.now();
  db.beginTran();
  try {
    for(cat of cats) {
      await db.insert('Cats', cat);
    }
    for(dog of dogs) {
      await db.insert('Dogs', dog);
    }
    db.commit();
    logger.log(`Committed insert of ${cats.length} cats and ${dogs.length} dogs into database!`);
  } catch (error) {
    logger.log(error); 
    db.rollback();
    logger.log(`Error! Rolled back database transaction`);
  } finally {
    logger.log(`Finished transaction in ${(Date.now() - start) / 1000} seconds`);
  }
}

const logStats = () => {
  console.log(logger.print());
}

(async () => {
  saveTest();
  await savePetShop();
  logStats();
})();