const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: String,
  role: String,
  email: String,
});

module.exports = mongoose.model('Employee', EmployeeSchema);