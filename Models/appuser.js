const mongoose = require('mongoose');

var appuserSchema = {
  loginId: String,
  firstName: String,
  lastName: String,
  about: String,
  active: Boolean,
  picture: String,
  activities: [{type: mongoose.Schema.Types.ObjectId, ref: 'Activity'}]
}

var Appuser = mongoose.model('Appuser', appuserSchema);
module.exports = Appuser;
