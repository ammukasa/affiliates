const express = require('express');
const app = express();
 
const router = express.Router();
let Contactus = require('../../model/contact-us/Contactus');
 
// Add 
router.route('/add-book').post((req, res, next) => {
  Contactus.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
 
// Get all 
router.route('/').get((req, res) => {
  Contactus.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
// Get 
router.route('/read-book/:id').get((req, res) => {
  Contactus.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
 
// Update 
router.route('/update-book/:id').put((req, res, next) => {
  Contactus.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Book updated successfully!')
    }
  })
})
 
// Delete 
router.route('/delete-book/:id').delete((req, res, next) => {
  Contactus.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
 
module.exports = router;