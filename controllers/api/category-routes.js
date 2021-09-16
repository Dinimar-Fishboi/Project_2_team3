const router = require('express').Router();
const {Category, Item} = require('../../models')

// GET all categories
router.get('/', async (req, res) => {
  try{
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err){
    res.status(500).json(err);
  }

});

module.exports = router;