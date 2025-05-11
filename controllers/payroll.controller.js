const Payroll = require('../models/payroll.model');

exports.generate = async (req, res) => {
  try {
    const data = await Payroll.create(req.body);
    res.send({ statusCode: 200, success: true, message: 'Payroll generated', result: data });
  } catch (err) {
    res.send({ statusCode: 500, success: false, message: 'Error generating payroll', result: err });
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await Payroll.find().populate('employeeId');
    res.send({ statusCode: 200, success: true, message: 'Payroll list', result: data });
  } catch (err) {
    res.send({ statusCode: 500, success: false, message: 'Error fetching payrolls', result: err });
  }
};