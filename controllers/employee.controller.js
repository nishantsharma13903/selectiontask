const Employee = require('../models/employee.model');

exports.create = async (req, res) => {
  try {
    const data = await Employee.create(req.body);
    res.send({ statusCode: 200, success: true, message: 'Employee created', result: data });
  } catch (err) {
    res.send({ statusCode: 500, success: false, message: 'Error creating employee', result: err });
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await Employee.find();
    res.send({ statusCode: 200, success: true, message: 'All employees', result: data });
  } catch (err) {
    res.send({ statusCode: 500, success: false, message: 'Error fetching employees', result: err });
  }
};