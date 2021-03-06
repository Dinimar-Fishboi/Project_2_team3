const router = require('express').Router();
const {Category, Item} = require('../../models')
const withAuth = require('../../utils/auth');

  router.get('/:id', async (req, res) => {
    try {
      const itemData = await User.findByPk(req.params.id);

      if (!userData) {
        res.status(404).json({ message: 'item is not available with this id!' });
        return;
      }
      // Serialised data for items fetched by user id.
      const editedItemData = itemData.map((item) => item.get({ plain: true }));
      res.status(200).json(editedItemData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/', withAuth, async (req, res) => {
    try {
      const newItem = await Item.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      res.status(200).json(newItem);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  
//   router.put('/:id', withAuth, async (req, res) => {
//     try {
//       const itemData = await item.update(req.body, {
//         where: {
//           id: req.params.id,
//           user_id: req.session.user_id,
//         },
//       });
//       if (!itemData[0]) {
//         res.status(404).json({ message: 'item is not available with this id!' });
//         return;
//       }
//       res.status(200).json(itemData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

router.put('/:id', withAuth, async (req, res) => {
    try {
      const itemData = await Item.update(req.body, {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
      if (!itemData) {
        res.status(404).json({ message: 'item is not available with this id!' });
        return;
      }
      res.status(200).json(itemData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const itemData = await Item.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
      if (!itemData) {
        res.status(404).json({ message: 'item is not available with this id!' });
        return;
      }
      res.status(200).json(itemData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;