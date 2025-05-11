const Attendance = require('../models/attendance.model');

exports.mark = async (req, res) => {
  try {
    const data = await Attendance.create(req.body);
    res.send({ statusCode: 200, success: true, message: 'Attendance marked', result: data });
  } catch (err) {
    res.send({ statusCode: 500, success: false, message: 'Error marking attendance', result: err });
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await Attendance.find().populate('employeeId');
    res.send({ statusCode: 200, success: true, message: 'Attendance list', result: data });
  } catch (err) {
    res.send({ statusCode: 500, success: false, message: 'Error fetching attendance', result: err });
  }
};