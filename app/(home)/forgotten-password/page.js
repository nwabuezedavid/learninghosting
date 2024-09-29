"use client";
import { Uselogin } from "@/app/(component)/context/auth";
import { uniSendWendmail } from "@/lib/unimail";
import { ResetPasswordEmail } from "@/mail/reset";
import { forpasw, Login } from "@/server/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginPage = () => {
  // State to store all form input values in a single object
  const {user , setuser} =Uselogin()
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
  });

  const [error, setError] = useState(""); // State for error messages
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission

  // Function to handle input changes and update the formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const { email } = formData;

    // Simple validation
    if (!email ) {
      setError("email field are required.");
      return;
    }

   

    // If all validations pass, clear the error message
    setError(null);
    setIsSubmitting(true); // Disable the submit button
    forpasw(formData)
.then(e=>{
  if(e.uuid){
    console.log(e);
    
    const req = {
      'to':e.email, 
      'subject':'Forgotten Password',
"html":ResetPasswordEmail(e.uuid)
    }
    uniSendWendmail(req)
    setTimeout(() => {
      setIsSubmitting(false); // Re-enable the submit button after registration
      setError("a mail was sent your email");
      
    }, 2000);
  }else{
    setError("email  doesnt exist ");
  }

  
})
.catch(ex =>{
  console.log("error", ex);
  
})
    // Simulating a network request with setTimeout
    setTimeout(() => {
      setIsSubmitting(false); // Re-enable the submit button after registration

    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform transition-all duration-500 hover:scale-105">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Forgotten Password
        </h2>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          

          <button
            type="submit"
            disabled={isSubmitting} // Button disabled when isSubmitting is true
            className={`w-full p-3 mt-4 text-white font-semibold rounded-md ${
              isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
          >
            {isSubmitting ? "Submitting..." : "submit"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?s
          <Link href="/login" className="font-medium text-blue-600 hover:text-blue-600">
          login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;
