// StripeHandlePage.js
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import HandleBookingPage from './HandleBookingPage';

function StripeHandlePage() {
    const stripePromise = loadStripe('pk_test_51P6rIpSE90XHMdsXYRqAuqyF7SVRgdwO7BpI03OViYrRkNBp6oZueE9mjiEDQSMcdAuTEjtDcs7NQjfHKJRjNMPk00SWsg5UL0');

    return (
        <div>
            <h2>Stripe Handle Page</h2>
            <Elements stripe={stripePromise}>
                <HandleBookingPage />
            </Elements>
        </div>
    );
}

export default StripeHandlePage;
