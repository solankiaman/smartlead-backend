const express = require('express');
const router = express.Router();
const AuditEvent = require('../models/AuditEvent');

router.post('/', async (req, res) => {
    try {
      const event = new AuditEvent(req.body);
      await event.save();
      res.status(201).send('Audit event saved.');
    } catch (err) {
      console.error('❌ Mongo Save Error:', err.message);
      res.status(400).send(err.message);
    }
  })

// GET - Retrieve all events
router.get('/', async (req, res) => {
  try {
    const events = await AuditEvent.find().sort({ id: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router; 