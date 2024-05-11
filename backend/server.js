const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017');

// Define user schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String
});
const User = mongoose.model('User', userSchema);

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors())

// Route to handle user registration
app.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create user
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration failed:', error);
    res.status(500).json({ message: 'Registration failed' });
  }
});

// Route to handle user login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, 'secret-key');
    res.json({ token });
  } catch (error) {
    console.error('Login failed:', error);
    res.status(500).json({ message: 'Login failed' });
  }
});

// Route to serve homepage
app.get('/', (req, res) => {
  res.send('Welcome to the homepage');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

