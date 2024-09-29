"use client"
import { ExportIm, Imageapi, saveImage, upload, uploadFile } from '@/server/imageupload';
import React, { useState } from 'react';

const DepositForm = () => {
  const [amount, setAmount] = useState('');
  const [wallet, setWallet] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [proof, setProof] = useState(null);

  const wallets = [
    { name: 'Bitcoin', image: '/path/to/bitcoin.png', address: '1BitcoinWalletAddress...' },
    { name: 'Ethereum', image: '/path/to/ethereum.png', address: '0xEthereumWalletAddress...' },
    { name: 'USDT', image: '/path/to/usdt.png', address: 'TUSDTWalletAddress...' },
  ];

  const handleProofChange = (e) => {
    setProof(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ amount, wallet, walletAddress, proof });
    const formData = await new FormData();
     formData.append('file', proof);
   await saveImage(formData);                

  };

  const handleWalletChange = (e) => {
    const selectedWallet = wallets.find((w) => w.name === e.target.value);
    setWallet(e.target.value);
    setWalletAddress(selectedWallet.address);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Deposit Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Amount Input */}
        <div>
          <label className="block text-gray-700">Deposit Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
            required
          />
        </div>

        {/* Wallet Selection */}
        <div>
          <label className="block text-gray-700">Select Crypto Wallet</label>
          <select
            value={wallet}
            onChange={handleWalletChange}
            className="w-full p-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a wallet</option>
            {wallets.map((wallet,e) => (
              <option key={e} value={wallet.name}>
                {wallet.name}
              </option>
            ))}
          </select>
        </div>

        {/* Display Wallet Information */}
        {wallet && (
          <div className="flex items-center space-x-4 mt-4">
            <img src={wallets.find((w) => w.name === wallet).image} alt={wallet} className="w-10 h-10" />
            <div>
              <p className="text-sm text-gray-700">Wallet Address:</p>
              <p className="font-mono text-sm text-gray-900">{walletAddress}</p>
            </div>
          </div>
        )}

        {/* Proof of Payment */}
        <div>
          <label className="block text-gray-700">Proof of Payment</label>
          <input
            type="file"
            onChange={handleProofChange}
            className="w-full p-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            Submit Deposit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DepositForm;
