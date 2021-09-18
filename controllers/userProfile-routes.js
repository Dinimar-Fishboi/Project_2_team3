const router = require('express').Router();
const { Category, User, Item } = require('../models');
const withAuth = require('../utils/auth');

// router.get('/', withAuth, async (req, res) => {
//     try {
//         const itemData = await Item.findAll({
//             where: {
//                 user_id: req.session.user_id
//             },
//             include: [{
//                 model: Item,
//                 attributes: [
//                     'id',
//                     'title',
//                     'description',
//                     'category_id',
//                  ]
//             }]
//         })

//         const items = itemData.map((item) => item.get({ plain: true }));

//         res.render('userProfile', {
//             items, 
//             logged_in: true   
//         })

//     } catch (err){
//         console.log(err)
//         res.status(500).json(err);
//     }
// })

router.get('/', async (req, res) => {
    try {
        const existingItems = await Category.findAll();
        res.json(existingItems);
        
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/put/:id', withAuth, async (req, res) => {
    try {
        const itemData = await Item.findOne({
            where :{
                id: req.params.id
            },
            include: [{ model: User}, { model: Category}],
        })

        const item = itemData.get({ plain: true });

        res.render('put', {item, logged_in: true})

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

module.exports = router;