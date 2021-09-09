const Category = require('./Category');
const Item = require('./Item');
const User = require('./User');

Item.hasOne(License, {
    foreignKey: 'category_id',
    onDelete: 'NULL',
  });

module.exports = { Category, Item, User };