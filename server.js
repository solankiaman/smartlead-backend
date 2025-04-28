const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Add root route to avoid 502 on Render
app.get('/', (req, res) => {
  res.send('✅ Smartlead backend is live');
});

// Register audit-log route
const auditLogRoutes = require('./routes/auditLog');
app.use('/audit-log', auditLogRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
