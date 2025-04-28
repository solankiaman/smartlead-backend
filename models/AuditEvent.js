const mongoose = require('mongoose');

const AuditEventSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Number,
    required: true
  },
  action: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('AuditEvent', AuditEventSchema);
