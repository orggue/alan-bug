var mongoose = require('./models'),
Schema = mongoose.Schema;

var tokenSchema = new Schema({
  date : Date,
  token : {
    type : String,
    required : true
  },
  to : {
    type : String,
    required : true,
    unique : true
  },
  from : Object
});

var Tokens = mongoose.model('Token',tokenSchema);

module.exports = Tokens;
