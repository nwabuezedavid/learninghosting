"use client"
import { Verify } from "@/server/verify";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Pagex = ({params}) => {
  const [first, setfirst] = useState(false)
  useEffect(() => {
    Verify(String(params.id))
    .then(e => setfirst(e))
    .catch(e=> setfirst(e))
  }, [])
  
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        {/* Bitcoin Icon */}
        <div className="mb-6 p-4 rounded-full bg-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-16 h-16 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 1v22M4.636 6.635L3 11l1.636 4.364M19.364 6.635L21 11l-1.636 4.364"
            />
          </svg>
        </div>
  
        {/* Success Message */}
        {first ?   <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Verification Successful!
        </h1> : <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Activation Code Expired
      </h1>}
      {first ?  
        <p className="text-lg text-gray-600 mb-8">
          Thank you for verifying your account and securing your investments.
        </p> : <p className="text-lg text-gray-600 mb-6">
        The activation code you used has expired. Please request a new code or
        contact support for assistance.
      </p>
}
  
        {/* Investment CTA Button */}
        <Link href={'/login'}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-400 transition duration-300"
         
        >
          Go to login
        </Link>
  
  
        {/* Security & Trust Badges */}
        <div className="flex justify-center space-x-6 mt-8">
          <img
            src="/ref.avif" // Replace with real logo paths
            alt="Trusted Logo"
            className="h-10"
          />
          <img
            src="/KPMG-report-crypto-funds-held-in-Bitpanda-crypto-storage-exceed-customer-holdings_NOBACKGROUND.png" // Replace with real logo paths
            alt="Secure Payment Logo"
            className="h-10"
          />
        </div>
      </div>
    );
  };
  
  export default Pagex;
  

  