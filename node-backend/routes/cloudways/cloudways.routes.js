module.exports = app => {
  const Affiliates = require("../../../src/app/controllers/cloudways.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", Affiliates.create);

  // Retrieve all Tutorials
  router.get("/", Affiliates.findAll);

  // Retrieve all published Tutorials
  router.get("/published", Affiliates.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", Affiliates.findOne);

  // Update a Tutorial with id
  router.put("/:id", Affiliates.update);

  // Delete a Tutorial with id
  router.delete("/:id", Affiliates.delete);

  // Delete all Tutorials
  router.delete("/", Affiliates.deleteAll);

  app.use("/api/cloudways", router);
};  