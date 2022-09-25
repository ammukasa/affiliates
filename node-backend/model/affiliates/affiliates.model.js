module.exports = (sequelize, Sequelize) => {
  const Affiliate = sequelize.define("affilate", {
    companyName: {
      type: Sequelize.STRING
    },
    companyHeading: {
      type: Sequelize.STRING
    },
    companyImage: {
      type: Sequelize.STRING
    },
    companyUrl: {
      type: Sequelize.STRING
    },
    navUrl: {
      type: Sequelize.STRING
    },
    features1: {
      type: Sequelize.STRING
    },
    features2: {
      type: Sequelize.STRING
    },
    features3: {
      type: Sequelize.STRING
    },
    features4: {
      type: Sequelize.STRING
    },
    features5: {
      type: Sequelize.STRING
    },
    addedadv1: {
      type: Sequelize.STRING 
    },
    addedadv2: {
      type: Sequelize.STRING
    },
    addedadv3: {
      type: Sequelize.STRING
    },
    addedadv4: {
      type: Sequelize.STRING
    },
    addedadv5: {
      type: Sequelize.STRING
    },
    visited: {
      type: Sequelize.INTEGER
    },
    counted: {
      type: Sequelize.INTEGER
    },
    totavg: {
      type: Sequelize.INTEGER 
    },
    all_reviews: {
      type: Sequelize.INTEGER
    },
    discount_sale: {
      type: Sequelize.STRING
    },
    discount_status: {
      type: Sequelize.STRING
    },
    discount_per: {
      type: Sequelize.STRING
    },
    low_sale: {
      type: Sequelize.STRING
    } 
  });

  return Affiliate;
};
