const Leave = require('../models/leave.model');

exports.apply = async (req, res) => {
  try {
    const data = await Leave.create(req.body);
    res.send({ statusCode: 200, success: true, message: 'Leave applied', result: data });
  } catch (err) {
    res.send({ statusCode: 500, success: false, message: 'Error applying leave', result: err });
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await Leave.find().populate('employeeId');
    res.send({ statusCode: 200, success: true, message: 'Leave list', result: data });
  } catch (err) {
    res.send({ statusCode: 500, success: false, message: 'Error fetching leaves', result: err });
  }
};