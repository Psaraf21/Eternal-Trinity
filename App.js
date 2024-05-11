import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import AboutPage from './components_pages/AboutPage';
import EventsPage from './components_pages/EventsPage';
import ServicesPage from './components_pages/ServicesPage';
import DonatePage from './components_pages/DonatePage';
import BookingPage from './components_pages/BookingPage';
import ContactPage from './components_pages/ContactPage';
import HomePage from './components_pages/HomePage';
import Login from './components_pages/Login';
import Register from './components_pages/Register';
import TemplePage from './components_pages/TemplePage';
import SearchResultsPage from './components_pages/SearchResultPage';
import PrivacyPolicy from './components_pages/PrivacyPolicy';
import TermsAndConditions from './components_pages/TermsAndConditions';
import Dashboard from './components_pages/Dashboard';
import CartPage from './components_pages/CartPage';
import AddHotel from './components_pages/AddHotel';
import HandleBookingPage from './components_pages/HandleBookingPage';
import StripeHandlePage from './components_pages/StripeHandlePage';
import AddParshad from './components_pages/AddParshad';
import UserDashboard from './components_pages/UserDashboard'
import Cart from './components_pages/Cart';
import Payment from './components_pages/Payment';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} onLogout={handleLogout} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/TemplePage" element={<TemplePage/>}/>
        <Route path="/search" element={<SearchResultsPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/terms-and-conditions" component={TermsAndConditions} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/add-hotel" element={<AddHotel/>}/>
      <Route path="/book/:hotelId" element={<HandleBookingPage/>}/>
      <Route path="/admin/add-parshad" element={<AddParshad/>}/>
      <Route path="/parshad" element={<UserDashboard/>}/>
      <Route path="/ccart" element={<Cart/>}/>
      <Route path="/payment" element={<Payment/>}/>
      
      </Routes>
    </Router>
  );
}

export default App;