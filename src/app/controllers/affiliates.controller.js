const db = require("../../../node-backend/model/index");
const Tutorial = db.affilates;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.companyName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Affiliates
  const tutorial = {
companyName: 		req.body.companyName,
companyHeading:     req.body.companyHeading,
companyImage:       req.body.companyImage,
companyUrl:         req.body.companyUrl,
navUrl:             req.body.navUrl,
features1:          req.body.features1,
features2:          req.body.features2,
features3:          req.body.features3,
features4:          req.body.features4,
features5:          req.body.features5,
addedadv1:          req.body.addedadv1,
addedadv2:          req.body.addedadv2,
addedadv3:          req.body.addedadv3,
addedadv4:          req.body.addedadv4,
addedadv5:          req.body.addedadv5,
visited:            req.body.visited, 
counted:            req.body.counted, 
totavg:             req.body.totavg,
all_reviews:        req.body.all_reviews,
discount_sale:      req.body.discount_sale,
discount_status:    req.body.discount_status,
discount_per:       req.body.discount_per,
low_sale:           req.body.low_sale
  };

  // Save Tutorial in the database
  Tutorial.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const companyName = req.query.companyName;
  var condition = companyName ? { companyName: { [Op.iLike]: `%${companyName}%` } } : null;

  Tutorial.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tutorial.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// find all published Tutorial
exports.findAllPublished = (req, res) => {
  Tutorial.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
