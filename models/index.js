const Category = require('./Category');
const Item = require('./Item');
const User = require('./User');

// TODO: Associations

// We package our two models and export them as an object so we can import them together and use their proper names
module.exports = { Category, Item, User };