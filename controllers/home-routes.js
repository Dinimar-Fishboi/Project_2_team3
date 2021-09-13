const router = require('express').Router();
const { Category, User, Item } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const existingPosts = await Category.findAll();
    
    // Serialize data so the template can read it
    const editedPosts = existingPosts.map((post) => post.get({ plain: true }));
    console.log(editedPosts);

    // Pass serialized data and session flag into template
    res.render('displayposts', { 
      editedPosts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Getting categories by and id
router.get('/categories/:id', async (req, res) => {

});

// Login route
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
