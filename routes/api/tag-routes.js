const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Id.findAll({include:[Tag]}).then(productData=>res.json(productData)).catch(err=>res.json(err))
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Id.findOne({where:{id:req.params.id},include:[Tag]}).then(productData=>res.json(productData)).catch(err=>res.json(err))
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Id.create({Tag}).then(productData=>res.json(productData)).catch(err=>res.json(err))
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Id.update({where:{id:req.params.id}}).then(productData=>res.json(productData)).catch(err=>res.json(err))
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Id.delete({where:{id:req.params.id}}).then(productData=>res.json(productData)).catch(err=>res.json(err))
});

module.exports = router;
