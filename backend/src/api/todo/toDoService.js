const toDo = require('./toDo');

toDo.methods([
  'get', 'post', 'put', 'delete'
]);

toDo.updateOptions({
  new: true,
  runValidators: true
});

module.exports = toDo;