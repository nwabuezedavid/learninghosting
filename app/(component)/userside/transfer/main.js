"use client"
import React, { useState } from 'react';

const TransferFundsForm = () => {
  const [recipient, setRecipient] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD'];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log({ recipient, transferAmount, currency });
    // Example: Send API call to perform fund transfer
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 w-[80%] rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Transfer Funds</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipient Input */}
        <div>
          <label className="block text-gray-700">Recipient Email or Username</label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipient email or username"
            required
          />
        </div>

        {/* Currency Selection */}
        <div>
          <label className="block text-gray-700">Select Currency</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a currency</option>
            {currencies.map((currencyOption) => (
              <option key={currencyOption} value={currencyOption}>
                {currencyOption}
              </option>
            ))}
          </select>
        </div>

        {/* Transfer Amount */}
        <div>
          <label className="block text-gray-700">Amount to Transfer</label>
          <input
            type="number"
            value={transferAmount}
            onChange={(e) => setTransferAmount(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            Transfer Funds
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransferFundsForm;
