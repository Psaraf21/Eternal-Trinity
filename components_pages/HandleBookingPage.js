import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from "./Header";
import '../css/HandleBookingPage.css';

function generateRandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function HandleBookingPage() {
    const { hotelId } = useParams();
    const [bookingDetails, setBookingDetails] = useState({
        hotelId: hotelId,
        checkInDate: '',
        checkOutDate: '',
        guests: 1,
        name: '',
        address: '',
        phoneNo: '',
        pincode: '',
        cardNumber: '',
        cvv: '',
        expiryMonth: '',
        expiryYear: ''
    });
    const [hotel, setHotel] = useState(null);
    const [showPaymentDetails, setShowPaymentDetails] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHotel = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/hotels/${hotelId}`);
                setHotel(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchHotel();
    }, [hotelId]);

    const handleBookingInputChange = (e) => {
        setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
    };

    const handleCheckout = () => {
        setShowPaymentDetails(true);
    };

    const handleSubmitBooking = async (e) => {
        e.preventDefault();

        try {
            // Generate a random paymentMethodId
            const paymentMethodId = generateRandomId(20);

            // Send booking details to the server
            const response = await axios.post('http://localhost:5000/bookings', {
                ...bookingDetails,
                paymentMethodId: paymentMethodId
            });

            if (response.status === 200) {
                // Optionally, you can reset the booking form after successful submission
                setBookingDetails({
                    hotelId: hotelId,
                    checkInDate: '',
                    checkOutDate: '',
                    guests: 1,
                    name: '',
                    address: '',
                    phoneNo: '',
                    pincode: '',
                    cardNumber: '',
                    cvv: '',
                    expiryMonth: '',
                    expiryYear: ''
                });
                setShowPaymentDetails(false);
                alert('Booking successful!');
                navigate('/');
            } else {
                console.error(response.data.message);
                alert('Booking failed. Please try again.');
            }
        } catch (error) {
            console.error(error);
            alert('Booking failed. Please try again.');
        }
    };

    return (
        <div>
            <Header/>
            <div className='Title_bar'>
                <h2>Booking Cart</h2>
            </div>

            <div className="container">
                <div>
                    {hotel && (
                        <div className="hotel-info">
                            <h2>{hotel.name}</h2>
                            <img src={hotel.image} alt={hotel.name} className='booking_page_checkout_image'/>
                            <p>Price: ${hotel.price}</p>
                            <p>Total Price: ${hotel.price * bookingDetails.guests}</p>
                        </div>
                    )}
                </div>
                <div>
                    <form className="booking-form" onSubmit={handleSubmitBooking}>
                        <div className='Bookin_Time'>
                            <div className='chcheck'><input type="date" name="checkInDate" value={bookingDetails.checkInDate} onChange={handleBookingInputChange} required /></div>
                            <div className='chcheck'>  <input type="date" name="checkOutDate" value={bookingDetails.checkOutDate} onChange={handleBookingInputChange} required /></div>
                            <div className='chcheck'> <input type="number" name="guests" value={bookingDetails.guests} onChange={handleBookingInputChange} required /></div>

                            <button type="button" onClick={handleCheckout}>Checkout</button>
                        </div>

                        <div className={`card_detail_page ${showPaymentDetails ? 'show' : 'hide'}`}>
                            {showPaymentDetails && (
                                <div className="payment-details">
                                    <input type="text" name="name" placeholder="Name" value={bookingDetails.name} onChange={handleBookingInputChange} required />
                                    <input type="text" name="address" placeholder="Address" value={bookingDetails.address} onChange={handleBookingInputChange} required />
                                    <input type="text" name="phoneNo" placeholder="Phone Number" value={bookingDetails.phoneNo} onChange={handleBookingInputChange} required />
                                    <input type="text" name="pincode" placeholder="Pincode" value={bookingDetails.pincode} onChange={handleBookingInputChange} required />
                                    <input type="text" name="cardNumber" placeholder="Card Number" value={bookingDetails.cardNumber} onChange={handleBookingInputChange} required />
                                    <input type="text" name="cvv" placeholder="CVV" value={bookingDetails.cvv} onChange={handleBookingInputChange} required />
                                    <input type="text" name="expiryMonth" placeholder="Expiry Month" value={bookingDetails.expiryMonth} onChange={handleBookingInputChange} required />
                                    <input type="text" name="expiryYear" placeholder="Expiry Year" value={bookingDetails.expiryYear} onChange={handleBookingInputChange} required />
                                    <button type="submit">Book Now</button>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default HandleBookingPage;
