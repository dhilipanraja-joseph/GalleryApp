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

router.delete('/deleteimage/:id',(req,res)=>{
  Image.findByIdAndRemove(req.params.id,(err,image)=>{
    if(err || !image){
      return res.status(400).send(err || 'Image not found.');
    }else{
      res.send('Deleted');
    }
  });
});

router.delete('/deleteAlbum/:album',(req,res)=>{
  Image.remove({album : req.params.album},err=>{
    res.status(err ? 400 : 200).send(err || "Album deleted" );
  })
});

router.put('/:album/changeAlbumName/:newalbum',(req,res)=>{
  Image.update({album : req.params.album},{album : req.params.newalbum},{multi : true},(err)=>{
    res.status(err ? 400 : 200).send(err || "modified" );
  });
});


module.exports = router;
