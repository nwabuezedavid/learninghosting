"use client";
import { Uselogin } from "@/app/(component)/context/auth";
import { Login, resetLogin } from "@/server/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginPage = ({params}) => {
  // State to store all form input values in a single object
  const {user , setuser} =Uselogin()
  const router = useRouter()
  console.log(params.id);
  
  const [formData, setFormData] = useState({
    password1: "",
    password: "",
    uuid:params?.id
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

    const { password1, password } = formData;

    // Simple validation
    if (!password1 || !password) {
      setError("Both fields are required.");
      return;
    }
    if (password1 !==  password) {
      setError("Password doesn't match");
      return;
    }

    // Email validation regex pattern
    

    // If all validations pass, clear the error message
    setError(null);
    setIsSubmitting(true); // Disable the submit button
    resetLogin(formData)
.then(e=>{
  console.log(e, formData);
  
  if(e == true){

    setuser(e)
    setTimeout(() => {
      setIsSubmitting(false); // Re-enable the submit button after registration
      router.push(`/login`)
      
    }, 2000);
  }else{
    setError("invalid detail try again later");
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
          Reset  your Account Password
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
              New password
            </label>
            <input
              type="password"
              id="email"
              name="password1"
              value={formData.password1}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter new password"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
            confirm-Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="confirm password"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting} // Button disabled when isSubmitting is true
            className={`w-full p-3 mt-4 text-white font-semibold rounded-md ${
              isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
          >
            {isSubmitting ? "Submitting..." : "Login"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?s
          <Link href="/login" className="font-medium text-blue-600 hover:text-blue-600">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;
