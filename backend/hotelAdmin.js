
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const stripe = require('stripe')('');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/hotelDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use(express.json());
app.use(cors());

const hotelSchema = new mongoose.Schema({
    name: String,
    price: Number,
    roomsAvailable: Number,
    location: String,
    image: String,
    description: String
});

const bookingSchema = new mongoose.Schema({
    hotelId: String,
    checkInDate: Date,
    checkOutDate: Date,
    guests: Number,
    paymentMethodId: String,
    status: String // You can add more fields as per your requirement
});

const Hotel = mongoose.model('Hotel', hotelSchema);
const Booking = mongoose.model('Booking', bookingSchema);
hotelSchema.index({ name: 'text', location: 'text' });

function validatePayment(cardNumber, cvv, expiryMonth, expiryYear) {
    if (cardNumber.length !== 16) {
        return false; 
    }
    if (cvv.length !== 3) {
        return false; 
    }

    // Validate expiry month (should be between 1 and 12)
    if (expiryMonth < 1 || expiryMonth > 12) {
        return false; // Invalid expiry month
    }
    const currentYear=24;
    if (expiryYear < currentYear || expiryYear > currentYear + 10) {
        return false; // Invalid expiry year
    }

    // Payment validation successful
    return true;
}

app.get('/hotels', async (req, res) => {
    const { query } = req.query;
    try {
        let hotels;
        if (query) {
            hotels = await Hotel.find({
                $text: { $search: query }
            });
        } else {
            hotels = await Hotel.find();
        }
        res.json(hotels);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/hotels/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const hotel = await Hotel.findById(id);
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }
        res.json(hotel);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/bookings', async (req, res) => {
    const { hotelId, checkInDate, checkOutDate,paymentMethodId, guests, cardNumber, cvv, expiryMonth, expiryYear } = req.body;
    try { 
        // Retrieve the selected hotel
        const hotel = await Hotel.findById(hotelId);
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }

        // Validate the payment
        const isPaymentValid = validatePayment(cardNumber, cvv, expiryMonth, expiryYear);
        if (!isPaymentValid) {
            return res.status(400).json({ message: 'Invalid payment details' });
        }

        // Calculate the total amount based on the price and number of guests
        const totalAmount = hotel.price * guests;

        // Create a booking record
        const booking = new Booking({
            hotelId,
            checkInDate,
            checkOutDate,
            guests,
            paymentMethodId,
            status: 'paid' // Assuming payment is successful
        });

        // Save the booking to the database
        const newBooking = await booking.save();

        res.status(200).json(newBooking);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/hotels', async (req, res) => {
    const hotel = new Hotel({
        name: req.body.name,
        price: req.body.price,
        roomsAvailable: req.body.roomsAvailable,
        location: req.body.location,
        image: req.body.image,
        description: req.body.description
    });
    try {
        const newHotel = await hotel.save();
        res.status(201).json(newHotel);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
