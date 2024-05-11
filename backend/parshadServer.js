const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const stripe = require('stripe')('');

// Initialize Express app
const app = express();
const PORT = 5001;

// Define user ID constant
const USER_ID = 'user_id_here';

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/parshadsDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Parshad Model
const Parshad = mongoose.model('Parshad', {
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  image: String
});

// Cart Model
const Cart = mongoose.model('Cart', {
  userId: String,
  items: [{
    parshadId: mongoose.Schema.Types.ObjectId,
    quantity: Number,
    name: String,
    price: Number,
    image: String
  }]
});

// Create indexes for faster querying
Parshad.createIndexes({
  name: 'text', // Index on name field for text search
  price: 1,     // Index on price field for sorting or filtering
});

Cart.createIndexes({
  userId: 1,   // Index on userId for faster retrieval of user's cart
});
// Routes

// Get all Parshads
app.get('/api/parshads', async (req, res) => {
  try {
    const parshads = await Parshad.find();
    res.json(parshads);
  } catch (err) {
    console.error('Error fetching Parshads:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get Parshad by ID
app.get('/api/parshads/:id', async (req, res) => {
  try {
    const parshad = await Parshad.findById(req.params.id);
    if (!parshad) {
      return res.status(404).json({ error: 'Parshad not found' });
    }
    res.json(parshad);
  } catch (err) {
    console.error('Error fetching Parshad by ID:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Add Parshad
app.post('/api/parshads', async (req, res) => {
  try {
    const { name, description, price, quantity, image } = req.body;
    const parshad = new Parshad({
      name,
      description,
      price,
      quantity,
      image
    });
    await parshad.save();
    res.json(parshad);
  } catch (err) {
    console.error('Error adding Parshad:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get user's cart
app.get('/api/cart', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: USER_ID }).populate('items.parshadId');
    res.json(cart);
  } catch (err) {
    console.error('Error fetching user cart:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add item to user's cart
app.post('/api/cart/add', async (req, res) => {
  try {
    const { parshadId, quantity } = req.body;
    const parshad = await Parshad.findById(parshadId); // Fetch complete parshad details
    const cart = await Cart.findOneAndUpdate(
      { userId: USER_ID },
      { $push: { items: { parshadId, quantity, name: parshad.name, price: parshad.price, image: parshad.image } } },
      { upsert: true, new: true }
    );
    res.json(cart);
  } catch (err) {
    console.error('Error adding item to cart:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Remove item from user's cart
app.post('/api/cart/remove', async (req, res) => {
  try {
    const { parshadId } = req.body;
    const cart = await Cart.findOneAndUpdate(
      { userId: USER_ID },
      { $pull: { items: { parshadId } } },
      { new: true }
    );
    res.json(cart);
  } catch (err) {
    console.error('Error removing item from cart:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/api/parshad/payment', async (req, res) => {
  const { date, quantity, cardNumber, cvv, expiryMonth, expiryYear } = req.body;
  try {
    // Validate the payment
    const isPaymentValid = validatePayment(cardNumber, cvv, expiryMonth, expiryYear);
    
    const price = 100; // Assuming the price is fixed at $100
    const totalAmount = price * quantity;
    const parshadId = "6632191534f36f4e651c1eb9"; 
    const parshad = await Parshad.findById(parshadId);
    console.log(parshad)
    if (!parshad) {
      return res.status(404).json({ error: 'Parshad not found' });
    }

    // Create a booking record
    const booking = new ParshadBooking({
      parshadId,
      date,
      quantity,
      paymentMethodId: '', // You might want to handle this
      status: 'paid' // Assuming payment is successful
    });

    // Save the booking to the database
    const newBooking = await booking.save();

    res.status(200).json(newBooking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Payment validation function
function validatePayment(cardNumber, cvv, expiryMonth, expiryYear) {
  
  if (cvv.length !== 3 || cvv.length !== 4) {
    return false; 
  }
  if ( expiryMonth < 1 || expiryMonth > 12) {
    return false; 
  }
  const currentYear = new Date().getFullYear();
  if (expiryYear < currentYear || expiryYear > currentYear + 10) {
    return false; 
  }

  // All validation passed, return true
  return true;
}

app.get('/api/cart/summary', async (req, res) => {
  try {
    const cartSummary = await Cart.aggregate([
      {
        $match: { userId: USER_ID }
      },
      {
        $unwind: "$items"
      },
      {
        $lookup: {
          from: "parshads",
          localField: "items.parshadId",
          foreignField: "_id",
          as: "parshad"
        }
      },
      {
        $unwind: "$parshad"
      },
      {
        $sort: { "parshad.name": 1 } 
      },
      {
        $group: {
          _id: "$userId",
          totalQuantity: { $sum: "$items.quantity" },
          totalValue: { $sum: { $multiply: ["$items.quantity", "$parshad.price"] } }
        }
      },
      {  $project : {
        name : 1,
    }

      }
    ]);

    if (cartSummary.length === 0) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    res.json(cartSummary[0]); 
  } catch (err) {
    console.error('Error fetching cart summary:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
