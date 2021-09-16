const router = require('express').Router();
const {Category, Item} = require('../../models')

router.get('/:id', async (req, res) => {
    try {
      const itemData = await Item.findByPk(req.params.id);
      if (!itemData) {
        res.status(404).json({ message: 'item is not available with this id!' });
        return;
      }
      res.status(200).json(itemData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  router.put('/:id', async (req, res) => {
    try {
      const itemData = await Item.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!itemData[0]) {
        res.status(404).json({ message: 'item is not available with this id!' });
        return;
      }
      res.status(200).json(itemData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  router.delete('/:id', async (req, res) => {
    try {
      const itemData = await Item.destroy({
        where: {
          id: req.params.id,
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