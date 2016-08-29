const express = require('express');
const router = express.Router();

const Image = require('../models/image');


router.get('/:album',(req,res)=>{
  Image.find({ album : req.params.album },(err , album)=>{
    res.status(err ? 400 : 200).send(err || album);
  });
});

router.post('/addimage',(req,res)=>{
  Image.create(req.body, (err, created_image) => {
    res.status(err ? 400 : 200).send(err || created_image);
  });
});



module.exports = router;
