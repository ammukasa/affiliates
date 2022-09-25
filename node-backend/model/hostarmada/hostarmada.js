const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let Contactus = new Schema({
  currentDate: {
    type: Date
  },
  commentApproved: {
    type: String
  },
  companyName: {
    type: String
  },
  productName: {
    type: String
  }
  ,
  comment: {
    type: String
  },
  fullName: {
    type: String
  },
  emailAdress: {
    type: String
  },
  linkName: {
    type: String
  },
  avg1: {
    type: String
  },
  avg2: {
    type: String
  },
  avg3: {
    type: String
  },
  avg4: {
    type: String
  },
  avg5: {
    type: String
  },
  totavg: {
    type: Number
  },
  voteh: {
    type: Number
  },
  voten: {
    type: Number
  },
  ip: {
    type: String
  }
  ,
  id: {
    type: Number
  }
}
,
{
  collection: 'hostarmada'  
})

module.exports = mongoose.model('Hostarmada', Contactus)
