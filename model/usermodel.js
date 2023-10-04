var mongoose = require('mongoose');

userSchema = new mongoose.Schema({
     no : {
          type: String
     },
     email : {
          type: String
     },
     password : {
          type: String
     }
});

module.exports = mongoose.model('user',userSchema);

















