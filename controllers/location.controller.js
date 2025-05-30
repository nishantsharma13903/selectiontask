// const Location = require('../models/location.model');

// exports.create = async (req, res) => {
//   try {
//     const data = await Location.create(req.body);
//     res.send({ statusCode: 200, success: true, message: 'Location saved', result: data });
//   } catch (err) {
//     res.send({ statusCode: 500, success: false, message: 'Error saving location', result: err });
//   }
// };

// exports.getByEmployee = async (req, res) => {
//   try {
//     const data = await Location.find({ employeeId: req.params.id }).sort({ timestamp: -1 }).limit(1);
//     res.send({ statusCode: 200, success: true, message: 'Latest location', result: data[0] });
//   } catch (err) {
//     res.send({ statusCode: 500, success: false, message: 'Error fetching location', result: err });
//   }
// };

// controllers/location.controller.js
const Location = require('../models/location.model');

exports.create = async (req, res) => {
  try {
    const data = await Location.create(req.body);
    res.send({
      statusCode: 200,
      success: true,
      message: 'Location saved',
      result: {
        _id: data._id,
        employeeId: data.employeeId,
        latitude: data.latitude,
        longitude: data.longitude,
        timestamp: data.timestamp
      }
    });
  } catch (err) {
    res.send({
      statusCode: 500,
      success: false,
      message: 'Error saving location',
      result: err
    });
  }
};

exports.getByEmployee = async (req, res) => {
  try {
   const locations = await Location.find({langitude : {$ne : 0}, longitude : {$ne : 0}});

   return res.send({
    statusCode : 200,
    message : "Fetched successfully",
    success : true,
    result : locations
   })
  } catch (err) {
    res.send({
      statusCode: 500,
      success: false,
      message: err.message || 'Error fetching location',
      result: err
    });
  }
};
