const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  date: String,
  status: { type: String, enum: ['Present', 'Absent'] }
});

module.exports = mongoose.model('Attendance', AttendanceSchema);