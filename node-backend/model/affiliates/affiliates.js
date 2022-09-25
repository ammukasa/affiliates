const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let Contactus = new Schema({
  companyName: {
    type: String
  },
  companyHeading: {
    type: String
  },
  companyImage: {
    type: String
  },
  companyUrl: {
    type: String
  },
  navUrl: {
    type: String
  },
  features1: {
    type: String
  },
  features2: {
    type: String
  },
  features3: {
    type: String
  },
  features4: {
    type: String
  },
  features5: {
    type: String
  },
  features6: {
    type: String
  },
  features7: {
    type: String
  },
  features8: {
    type: String
  },
  features9: {
    type: String
  },
  features10: {
    type: String
  },
  addedadv1: {
    type: String
  },
  addedadv2: {
    type: String
  },
  addedadv3: {
    type: String
  },
  addedadv4: {
    type: String
  },
  addedadv5: {
    type: String
  },
  visited: {
    type: Number
  },
  counted: {
    type: Number
  },
  totavg: {
    type: Number
  },
  all_reviews: {
    type: Number
  },
  discount_sale: {
    type: String
  },
  discount_status: {
    type: String
  },
  discount_per: {
    type: String
  },
  low_sale: {
    type: String
  } 
}
,
{
  collection: 'affilates'   
})

module.exports = mongoose.model('Affilates', Contactus)



// module.exports = (sequelize, Sequelize) => {
//   const Contactus = sequelize.define("affilate", {
//     companyName: {
//       type: Sequelize.STRING
//     },
//     companyHeading: {
//       type: Sequelize.STRING
//     },
//     companyImage: {
//       type: Sequelize.STRING
//     },
//     companyUrl: {
//       type: Sequelize.STRING
//     },
//     navUrl: {
//       type: Sequelize.STRING
//     },
//     features1: {
//       type: Sequelize.STRING
//     },
//     features2: {
//       type: Sequelize.STRING
//     },
//     features3: {
//       type: Sequelize.STRING
//     },
//     features4: {
//       type: Sequelize.STRING
//     },
//     features5: {
//       type: Sequelize.STRING
//     },
//     features6: {
//       type: Sequelize.STRING
//     },
//     features7: {
//       type: Sequelize.STRING
//     },
//     features8: {
//       type: Sequelize.STRING
//     },
//     features9: {
//       type: Sequelize.STRING
//     },
//     features10: {
//       type: Sequelize.STRING
//     },
//     addedadv1: {
//       type: Sequelize.STRING
//     },
//     addedadv2: {
//       type: Sequelize.STRING
//     },
//     addedadv3: {
//       type: Sequelize.STRING
//     },
//     addedadv4: {
//       type: Sequelize.STRING
//     },
//     addedadv5: {
//       type: Sequelize.STRING
//     },
//     visited: {
//       type: Sequelize.Number
//     },
//     counted: {
//       type: Sequelize.Number
//     },
//     totavg: {
//       type: Sequelize.Number
//     },
//     all_reviews: {
//       type: Sequelize.Number
//     },
//     discount_sale: {
//       type: Sequelize.STRING
//     },
//     discount_status: {
//       type: Sequelize.STRING
//     },
//     discount_per: {
//       type: Sequelize.STRING
//     },
//     low_sale: {
//       type: Sequelize.STRING
//     } 
//   });

//   return Contactus;
// };
