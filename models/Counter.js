const mongoose = require('mongoose');

// Simple schema to track counters for collections
const counterSchema = new mongoose.Schema({
  id: { type: String, required: true },  // counter name (example: 'auditEventId')
  seq: { type: Number, default: 0 } /// current sequence value
});

module.exports = mongoose.model('Counter', counterSchema);
