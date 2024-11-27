import React, { useState, useEffect } from 'react';
import { HandleChangeFunction } from '../../hooks/useFormValidation';

interface PaymentDetailsProps {
  values: {
    transactionId: string;
  };
  errors: any;
  handleChange: HandleChangeFunction;
  handleSubmit: (e: React.FormEvent<Element>) => void;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({ handleSubmit }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderData, setOrderData] = useState<any>(null);
  const [amount] = useState<number>(500); // Example amount in INR, adjust as needed
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false); // New state to track payment success
  const [paymentMessage, setPaymentMessage] = useState<string>(''); // New state to store payment message

  useEffect(() => {
    // Fetch order details or set default values
    const fetchOrderData = async () => {
      try {
        const response = await fetch('https://califitcalisthenics.com/api/payment/create-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount }),
        });
        const data = await response.json();
        setOrderData(data);
      } catch (error) {
        console.error('Error fetching order data:', error);
      }
    };

    fetchOrderData();
  }, [amount]);

  const initiatePayment = async () => {
    if (!orderData) return;

    try {
      setIsProcessing(true);

      // Step 2: Initialize Razorpay Checkout
      const options = {
        key: 'rzp_test_wPyvsML5e6gY59', // Your Razorpay Key ID
        amount: orderData.amount, // Amount in paise
        currency: orderData.currency,
        name: 'Event Registration',
        description: 'Event Payment',
        image: 'https://yourdomain.com/logo.png',
        order_id: orderData.id,
        handler: function (response: any) {
          // Send the payment details back to the server
          console.log('Payment successful:', response);
          alert('Payment successful!');
          handleSubmit(response);  // Call handleSubmit after payment success

          // Update the payment success status
          setPaymentSuccess(true);
          setPaymentMessage('Payment was successful. Your registration is complete!');
        },
        prefill: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          contact: '9876543210',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Error initiating payment:', error);
      alert('An error occurred while initiating payment');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Payment Details</h2>
      
      {/* Display the amount to be paid */}
      <div className="text-lg text-gray-700">
        <p><strong>Amount:</strong> ₹{amount}</p>
      </div>

      {/* Show payment success status */}
      {paymentSuccess && (
        <div className="text-green-600 font-semibold text-center mt-4">
          {paymentMessage}
        </div>
      )}

      {/* Payment button */}
      {!paymentSuccess && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={initiatePayment}
            className="bg-green-500 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing Payment...' : 'Pay ₹' + amount}
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentDetails;
