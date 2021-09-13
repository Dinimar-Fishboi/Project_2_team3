const { Category } = require('../models');

const categoryData = [
  {
    name: 'Other',
  },
  {
    name: 'Vegitables',
  },
  {
    name: 'Clothes',
  },
  {
    name: 'Fruits',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;