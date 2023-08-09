const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let collection;
  let park;

  beforeEach(function () {
    dino1 = new Dinosaur("velocaraptor", "meat", 300)
    dino2 = new Dinosaur("teradactile", "fish", 600)
    dino3 = new Dinosaur("long neck boys", "plants", 800)
    dino4 = new Dinosaur("t-rex", "metal gurus", 50)
    collection = [
      dino1,
      dino2,
      dino3,
      dino4,
    ]

    park = new Park("WhirlyDirly", 10, collection)
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, "WhirlyDirly")
  });
    

  it('should have a ticket price', function() {
    const actual = park.ticketPrice
    assert.strictEqual(actual, 10)
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurCollection
    assert.deepEqual(actual, [dino1, dino2, dino3, dino4])
  });

  it('should be able to add a dinosaur to its collection', function() {
    const dino5 = new Dinosaur("Somedino", "People", 5)
    park.addDino(dino5)
    const actual = park.dinosaurCollection[park.dinosaurCollection.length - 1]
    assert.strictEqual(actual, dino5)
  });

  it('should be able to remove a dinosaur from its collection', function() {
    const dinoToRemove = new Dinosaur("Somedino", "People", 5)
    park.addDino(dinoToRemove)
    park.removeDino(dinoToRemove)
    const actual = park.dinosaurCollection.length
    assert.strictEqual(actual, 4)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = park.findBestDino()
    assert.deepStrictEqual(actual, dino3)
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    const dino5 = new Dinosaur("t-rex", "People", 5)
    park.addDino(dino5)
    const actual = park.findSpecies("t-rex")
    assert.deepStrictEqual(actual, [dino4, dino5])
  });

  it('should be able to calculate the total number of visitors per day', function() {
    const actual = park.calculateTotalVisitors()
    assert.strictEqual(actual, 1750)
  });

  it('should be able to calculate the total number of visitors per year', function() {
    const actual = park.calculateTotalVisitorsPerYear()
    assert.strictEqual(actual, 638750)
  });

  it('should be able to calculate total revenue for one year', function() {
    const actual = park.calculateTotalRevenue()
    assert.strictEqual(actual, 6387500)
  });

  it('should be able to remove all the dinos of a specific species', function() {
    const dino5 = new Dinosaur("t-rex", "People", 5)
    park.addDino(dino5)
    park.removeSpecies("t-rex")
    const actual = park.dinosaurCollection
    const expected = [dino1, dino2, dino3]
    assert.deepStrictEqual(actual, expected)
  })

  it('should be able to make an object containing each diet type and the number of dinos', function() {
    const dino5 = new Dinosaur("t-rex", "metal gurus", 5)
    park.addDino(dino5)
    const actual = park.dietTypes()
    const expected = {"meat": 1, "fish": 1, "plants": 1, "metal gurus": 2}
    assert.deepStrictEqual(actual, expected)
  })
});
