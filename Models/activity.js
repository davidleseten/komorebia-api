const mongoose = require('mongoose');

var activitySchema = {
  title: String,
  headline: String,
  description: String,
  active: Boolean,
  spotlight: Boolean,
  picture: String,
  creator: [{type: mongoose.Schema.Types.ObjectId, ref: 'Appuser'}],
  participants: [{type: mongoose.Schema.Types.ObjectId, ref: 'Appuser'}]
}

var Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;
