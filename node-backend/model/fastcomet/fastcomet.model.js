module.exports = (sequelize, Sequelize) => {
  const Hostarmada = sequelize.define("fastcomet", {
    currentDate: {
      type: Sequelize.DATE
    },
    commentApproved: {
      type: Sequelize.STRING
    },
    companyName: {
      type: Sequelize.STRING
    },
    productName: {
      type: Sequelize.STRING
    },
    comment: {
      type: Sequelize.STRING
    },
    fullName: {
      type: Sequelize.STRING
    },
    emailAdress: {
      type: Sequelize.STRING
    },
    linkName: {
      type: Sequelize.STRING
    },
    avg1: {
      type: Sequelize.STRING
    },
    avg2: {
      type: Sequelize.STRING
    },
    avg3: {
      type: Sequelize.STRING
    },
    avg4: {
      type: Sequelize.STRING 
    },
    avg5: {
      type: Sequelize.STRING
    },
    totavg: {
      type: Sequelize.INTEGER
    },
    voteh: {
      type: Sequelize.INTEGER
    },
    voten: {
      type: Sequelize.INTEGER
    },
    ip: {
      type: Sequelize.STRING
    }
  });

  return Hostarmada;
};
