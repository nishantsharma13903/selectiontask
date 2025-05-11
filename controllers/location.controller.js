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
    // Inject random coordinates (for simulation purposes only)
    const randomLat = (Math.random() * 180 - 90).toFixed(6); // -90 to +90
    const randomLng = (Math.random() * 360 - 180).toFixed(6); // -180 to +180

    // Optionally: Save random location (comment this out if not desired)
    await Location.create({
      employeeId: req.params.id,
      latitude: randomLat,
      longitude: randomLng,
      timestamp: new Date()
    });

    const data = await Location.find({ employeeId: req.params.id })
      .sort({ timestamp: -1 })
      .limit(1);

    if (data.length === 0) {
      return res.send({
        statusCode: 404,
        success: false,
        message: 'No location found',
        result: null
      });
    }

    res.send({
      statusCode: 200,
      success: true,
      message: 'Latest location',
      result: {
        _id: data[0]._id,
        employeeId: data[0].employeeId,
        latitude: data[0].latitude,
        longitude: data[0].longitude,
        timestamp: data[0].timestamp
      }
    });
  } catch (err) {
    res.send({
      statusCode: 500,
      success: false,
      message: 'Error fetching location',
      result: err
    });
  }
};
