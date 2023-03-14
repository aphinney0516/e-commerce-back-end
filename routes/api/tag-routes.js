const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({include:[Tag]}).then(productData=>res.json(productData)).catch(err=>res.json(err))
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({where:{id:req.params.id},include:[Tag]}).then(productData=>{
    if(!preoductData){
      res.json({msg:'no product found'})
    }
    res.json(productData)
  }).catch(err=>res.json(err))
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body).then(productData=>res.json(productData)).catch(err=>res.json(err))
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({where:{id:req.params.id}}).then(productData=>res.json(productData)).catch(err=>res.json(err))
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({where:{id:req.params.id}}).then(productData=>res.json(productData)).catch(err=>res.json(err))
});

module.exports = router;
