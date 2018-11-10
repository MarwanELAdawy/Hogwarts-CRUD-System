var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var students = new Schema({
  id: {
      type:Number
  },
  name: {
    type: String
  },
  phone: {
    type: Number
  },
  URL: {
    type: String
  },
  degree: {
    type: number
  },
  committee: {
      type: String
  }
},{
    collection: 'students'
});

module.exports = mongoose.model('students', students);