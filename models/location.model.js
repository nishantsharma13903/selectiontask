const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  latitude: {
    type : Number,
    default : 0
  },
  longitude: {
    type : Number,
    default : 0
  },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Location', LocationSchema);