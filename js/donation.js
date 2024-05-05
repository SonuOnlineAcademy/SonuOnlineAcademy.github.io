function showPopup(paymentMethod) {
    const popup = document.getElementById('popup');
    const paymentMethodElem = document.getElementById('payment-method');
    const paymentAddressElem = document.getElementById('payment-address');

    paymentMethodElem.textContent = `Payment Method: ${paymentMethod}`;
    // Set appropriate payment address based on the method
    if (paymentMethod === 'PayPal') {
        paymentAddressElem.textContent = 'PayPal: https://paypal.me/anandssmpt';
    } else if (paymentMethod === 'UPI') {
        paymentAddressElem.textContent = 'UPI: anandssmpt@paytm';
    }

    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
