"use client"

import React, { useState } from 'react';

const InvestmentCard = ({ title, roi, min, max, times, capitalBack, bgColor }) => {
  // State to manage whether the input is visible or not
  const [showInput, setShowInput] = useState(false);
  const [investmentAmount, setInvestmentAmount] = useState('');

  // Toggle the input field on button click
  const handleInvestClick = () => {
    setShowInput(!showInput);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInvestmentAmount(e.target.value);
  };

  // Function to handle investment submission
  const handleInvestmentSubmit = () => {
    alert(`You have invested: ${investmentAmount} USD`);
    // You can perform other actions here, like submitting the data to an API
  };

  return (
    <div className="bg-white text-gray-800 p-6 rounded-lg w-full md:w-1/2 mx-2 my-4 shadow-lg border border-gray-200">
      {/* Header with ROI */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <div className={`text-gray-900 p-2 rounded-full bg-gradient-to-r ${bgColor}`}>
          <span className="text-sm">Roi</span>
          <br />
          <span className="text-xl font-bold">{roi}%</span>
        </div>
      </div>

      {/* Info Section */}
      <p className="mt-4 text-lg text-gray-600">Every Day</p>
      <ul className="mt-4 space-y-2">
        <li className="flex items-center">
          <span className="text-pink-500 mr-2">■</span> Minimum: {min} USD
        </li>
        <li className="flex items-center">
          <span className="text-pink-500 mr-2">■</span> Maximum: {max} USD
        </li>
        <li className="flex items-center">
          <span className="text-pink-500 mr-2">■</span> For: {times} Times
        </li>
        <li className="flex items-center">
          <span className="text-pink-500 mr-2">■</span> Capital Back: {capitalBack}
        </li>
      </ul>

      {/* Affiliate Bonus Section */}
      <p className="mt-4 font-semibold text-gray-700">Affiliate bonus</p>

      {/* Buttons */}
      <div className="mt-6 space-y-4">
        <button
          onClick={handleInvestClick}
          className={`w-full p-2 rounded-lg text-white bg-gradient-to-r ${bgColor} hover:opacity-90`}
        >
          {showInput ? 'Cancel' : 'Invest now'}
        </button>

        {showInput && (
          <div className="mt-4">
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-lg mb-2"
              placeholder="Enter amount to invest"
              value={investmentAmount}
              onChange={handleInputChange}
            />
            <button
              onClick={handleInvestmentSubmit}
              className="w-full p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
            >
              Submit Investment
            </button>
          </div>
        )}

        <button className="w-full p-2 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-200">
          Invest using balance
        </button>
      </div>
    </div>
  );
};

const InvestmentPlans = () => {
  return (
    <div className="flex justify-center w-full h-full overflow-auto  items-center bg-gray-100 min-h-screen p-4">
      <div className="flex flex-col md:flex-row justify-center items-center mb-[12%] mt-[4%]">
        <InvestmentCard
          title="TESLA STARTER"
          roi="10.00"
          min="500.00"
          max="5,000.00"
          times="5"
          capitalBack="Yes"
          bgColor="from-pink-500 to-purple-500"
        />
        <InvestmentCard
          title="TESLA STOCKS"
          roi="30.00"
          min="5,000.00"
          max="10,000.00"
          times="5"
          capitalBack="Yes"
          bgColor="from-blue-500 to-purple-500"
        />
      </div>
    </div>
  );
};

export default InvestmentPlans;

