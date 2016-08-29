const express = require('express');
const router = express.Router();

const Album = require('../models/album');

router.get('/',(req,res)=>{
  Album.find({},(err , albums)=>{
    res.status(err ? 400 : 200).send(err || albums);
  });
});

router.post('/addalbum',(req,res)=>{
  Album.create(req.body,(err,album)=>{
    res.status(err ? 400 : 200).send(err || album);
  });
});


module.exports = router;
