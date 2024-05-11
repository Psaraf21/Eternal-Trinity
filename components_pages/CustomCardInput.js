import React, { useState } from 'react';

function CustomCardInput({ onChange }) {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCVV] = useState('');

    const handleCardNumberChange = (e) => {
        const input = e.target.value.replace(/\D/g, '').substring(0, 16); // Allow only numbers and limit length to 16 digits
        setCardNumber(input);
        onChange({ cardNumber: input, expiryDate, cvv });
    };

    const handleExpiryDateChange = (e) => {
        const input = e.target.value.replace(/\D/g, '').substring(0, 4); // Allow only numbers and limit length to 4 characters (MMYY)
        setExpiryDate(input);
        onChange({ cardNumber, expiryDate: input, cvv });
    };

    const handleCVVChange = (e) => {
        const input = e.target.value.replace(/\D/g, '').substring(0, 3); // Allow only numbers and limit length to 3 digits
        setCVV(input);
        onChange({ cardNumber, expiryDate, cvv: input });
    };

    return (
        <div>
            <label>Card Number:</label>
            <input
                type="text"
                value={cardNumber}
                onChange={handleCardNumberChange}
                placeholder="Enter card number"
                maxLength={16}
                required
            />
            <label>Expiry Date (MMYY):</label>
            <input
                type="text"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                placeholder="MMYY"
                maxLength={4}
                required
            />
            <label>CVV:</label>
            <input
                type="text"
                value={cvv}
                onChange={handleCVVChange}
                placeholder="CVV"
                maxLength={3}
                required
            />
        </div>
    );
}

export default CustomCardInput;
