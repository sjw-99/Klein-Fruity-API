const fruits = require("../fruits.json");

class Fruit {
  constructor({ genus, name, id, family, order, nutritions }) {
    this.genus = genus;
    this.name = name;
    this.id = id;
    this.family = family;
    this.order = order;
    this.nutritions = nutritions;
  }

  static showAll = () => {
    return fruits.map((fruit) => new Fruit(fruit));
  };

  static showOne = (name) => {
    const fruit = fruits.filter((fruit) => fruit.name.toLowerCase() == name);
    if (fruit.length == 1) {
      return new Fruit(fruit[0]);
    } else {
      throw Error("The fruit does not exist.");
    }
  };

  static create = (data) => {
    const newFruit = data;
    console.log(newFruit);
    newFruit["id"] = fruits.length + 1;
    fruits.push(newFruit);
    return new Fruit(newFruit);
  };

  update(data) {
    const updatedFruit = fruits.find(
      (fruit) => fruit.name.toLowerCase() == this.name.toLowerCase()
    );
    if (updatedFruit) {
      updatedFruit.name = data.name;
      return new Fruit(updatedFruit);
    } else {
      throw "Fruit not found";
    }
  }

  destroy() {
    const destroyedFruit = fruits.find(
      (fruit) => fruit.name.toLowerCase() == this.name.toLowerCase()
    );
    if (destroyedFruit) {
      const index = fruits.indexOf(destroyedFruit);
      fruits.splice(index, 1);
    } else {
      throw "Fruit not found.";
    }
  }
}

module.exports = Fruit;
