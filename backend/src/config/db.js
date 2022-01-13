const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/toDo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});