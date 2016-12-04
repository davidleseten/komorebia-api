const express = require('express');
var router = express.Router();
var Activity = require('../Models/activity.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Activity.find({}, function(err, activities){
    if (err){
      res.status(500).send();
    } else {
      res.json(activities);
    }
  })
});

router.post('/', function(req, res){
  var activity = new Activity(req.body);
  activity.save(function(err){
    if (err){
      console.log('cow');
      res.status(500).send();
    } else {
      res.json(activity);
    }
  })
})

// Single activity routes
router.use('/:id', function (req, res, next) {
  Activity.findOne({ '_id': req.params.id }, function (err, activity) {
    if (err) {
      res.status(500).send()
    } else if (!activity) {
      res.status(404).send()
    } else {
      res.activity = activity;
      next()
    }
  })
})

router.get('/:id', function (req, res) {
  res.json(res.activity)
})

router.put('/:id', function(req, res){
  var updatedActivity = Object.assign(res.activity, req.body);
  updatedActivity.save(function(err){
    if (err){
      res.status(500).send();
    } else {
      res.status(204).send();
    }
  })
})

router.delete('/:id', function(req, res){
  res.activity.remove(function(err){
    if (err){
      res.status(500).send();
    } else {
      res.status(204).send();
    }
  })
})
module.exports = router;
