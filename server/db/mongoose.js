var mongoose = require ('mongoose');
//promises are awesome!
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports={mongoose};