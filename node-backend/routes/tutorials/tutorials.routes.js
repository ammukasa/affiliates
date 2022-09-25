// const express = require('express');
// const app = express();
 
// const router = express.Router();
// let Bluehost = require("../../model/tutorials/tutorial"); 
// // Add 
// router.route('/add-book').post((req, res, next) => {
//   Bluehost.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// });
 
// // Get all 
// router.route('/').get((req, res) => {
//   Bluehost.find((error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })
 
// // Get 
// router.route('/:id').get((req, res) => {
//   Bluehost.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })
 
 
// // Update 
// router.route('/:id').put((req, res, next) => {
//   Bluehost.findByIdAndUpdate(req.params.id, {
//     $set: req.body
//   }, (error, data) => {
//     if (error) {
//       return next(error);
//       console.log(error)
//     } else {
//       res.json(data)
//       console.log('Book updated successfully!')  
//     }
//   })
// })
 
// // Delete 
// router.route('/delete-book/:id').delete((req, res, next) => {
//   Bluehost.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data
//       })
//     }
//   })
// })
 
// module.exports = router;


module.exports = app => {
  const tutorials = require("../../../src/app/controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tutorials.create);

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  // Delete all Tutorials
  router.delete("/", tutorials.deleteAll);

  app.use("/api/tutorials", router);
};
