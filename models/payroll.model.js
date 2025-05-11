const mongoose = require('mongoose');

const PayrollSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  month: String,
  salary: Number,
  paid: { type: Boolean, default: false }
});

module.exports = mongoose.model('Payroll', PayrollSchema);