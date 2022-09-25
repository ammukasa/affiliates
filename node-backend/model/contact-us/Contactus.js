const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let Contactus = new Schema({
  currentDate: {
    type: Date
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  subject: {
    type: String
  },
  comment: {
    type: String
  }
}
,
{
  collection: 'contactus'  
})

module.exports = mongoose.model('Contactus', Contactus)
