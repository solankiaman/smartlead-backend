const mongoose = require('mongoose');
const Counter = require('./Counter');

// Schema for storing audit events
const auditEventSchema = new mongoose.Schema({
  id: { type: Number },
  timestamp: { type: Number, required: true },
  action: { type: String, required: true },
  value: { type: String, required: true }
});

// Pre-save hook to auto-increment ID before saving
auditEventSchema.pre('save', async function (next) {
  if (this.isNew) {
    const counter = await Counter.findOneAndUpdate(
      { id: 'auditEventId' },        // Search for auditEventId counter
      { $inc: { seq: 1 } },          // Increment by 1
      { new: true, upsert: true }    // Create if not exist
    );
    this.id = counter.seq;          // Assign auto incremented id
  }
  next();
});

module.exports = mongoose.model('AuditEvent', auditEventSchema);
