const Fruit = require("../models/fruit.js");

// Index Route - Grabbing all from FruityAPI Data
const index = (req, res) => {
  try {
    const fruits = Fruit.showAll();
    res.status(200).send(fruits);
  } catch (err) {
    res.status(500).send({ error: "Server error." });
  }
};

// Show Route - Getting specific fruit from fruits.json
const show = async (req, res) => {
  const name = req.params.name.toLowerCase();
  try {
    const fruit = Fruit.showOne(name);
    res.status(200).send(fruit);
  } catch (err) {
    res.status(404).send({ error: "Fruit not found." });
  }
};

//Create Route
const create = async (req, res) => {
  try {
    const fruitData = req.body;
    const newFruit = await Fruit.create(fruitData);
    res.status(201).send(newFruit);
  } catch (err) {
    res.status(409).send("Not able to add Fruit.");
  }
};

//Update Route
const update = async (req, res) => {
  const name = req.params.name.toLowerCase();
  try {
    const fruit = await Fruit.showOne(name);
    const result = await fruit.update(req.body);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send("No fruit with that name found.");
  }
};

//Destroy Route
const destroy = async (req, res) => {
  const name = req.params.name.toLowerCase();
  try {
    const fruit = await Fruit.showOne(name);
    const result = await fruit.destroy();
    res.sendStatus(204);
  } catch (err) {
    res.status(404).send("No fruit with that name found.");
  }
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
