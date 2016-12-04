var express = require('express');
var router = express.Router();
var Appuser = require('../Models/appuser.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Appuser.find({}, function(err, appuser){
    if (err){
      res.status(500).send();
    } else {
      res.json(appuser);
    }
  })
});

router.post('/', function(req, res){
  var appuser = new Appuser(req.body);
  appuser.save(function(err){
    if (err){
      res.status(500).send();
    } else {
      res.json(appuser);
    }
  })
})

// Single activity routes
router.use('/:id', function (req, res, next) {
  Appuser.findOne({ '_id': req.params.id }, function (err, appuser) {
    if (err) {
      console.log("cow");
      res.status(500).send();
    } else if (!appuser) {
      res.status(404).send();
    } else {
      res.appuser = appuser;
      next()
    }
  })
})

router.get('/:id', function (req, res) {
  res.json(res.appuser)
})

router.put('/:id', function(req, res){
  var updatedUser = Object.assign(res.appuser, req.body);
  updatedUser.save(function(err){
    if (err){
      res.status(500).send();
    } else {
      res.status(204).send();
    }
  })
})

router.delete('/:id', function(req, res){
  res.appuser.remove(function(err){
    if (err){
      res.status(500).send();
    } else {
      res.status(204).send();
    }
  })
})


module.exports = router;
