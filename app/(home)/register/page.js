"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Register } from "@/server/auth";
import { Uselogin } from "@/app/(component)/context/auth";
import { SendWendmail } from "@/lib/mail";
import AccountActivation from "@/mail/activate";
import { useRouter } from "next/navigation";


const RegisterPage = () => {
  // State to store all form input values in a single object
  const {user , setuser} =Uselogin()
  const routew = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const [error, setError] = useState(""); // State for error messages
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission

  // Function to handle input changes and update the formData state
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    
  };
  // SecureToken :"a93a113b-ec47-454c-91bc-ef950fb9f27e",

  function sendmail(params) {
    try {
      
    Email.send({
        Host : "smtp.elasticemail.com",
  Username : "nwabuezedavid333@gmail.com",
  Password : "25992E117FE5F741770D1B1685BF6C36C7D4",
  Port:"2525",
      To : "nwabuezedavid013@gmail.com",
      From : `daspajugna@gufum.com`,
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
  
    } catch (error) {
      alert(error)
    }
  // if(window.Email){
  //   window.Email.send
  // }
   }





  const handleRegister = (e) => {
    e.preventDefault();

    const { fullName,username, lastName, email, password, agreeToTerms } = formData;

    // Simple validation
    if (!fullName || !lastName || !username || !email || !password) {
      setError("All fields are required.");
      return;
    }

    if (!agreeToTerms) {
      setError("You must agree to the terms and conditions to register.");
      return;
    }

    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // If all validations pass, clear the error message
    setIsSubmitting(true); // Disable the submit button
    Register(formData)
    .then(async e=>  {
      if (e?.error){
        setError('user already exist ')
      }
      else{
        const req = {
          'to':formData.email, 
          'subject':'Account verification Link',
          'token':e.USER.uuid,
        }
        
        await SendWendmail(req)

        .then(e=> {

          setuser(e.USER)
          setError('an mail was sent to your email');
          routew.refresh()
        }
      ).catch(xe=> {
        
        setError('404 error', xe);
      }
      
    )
    routew.refresh()
      }
      
     

    })
    .catch(ex =>{
      setError(ex);
      
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
          Register</h2>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              placeholder="Enter your last name"
            />
          </div>
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
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">
                I agree to the terms and conditions
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting} // Button disabled when isSubmitting is true
            className={`w-full p-3 mt-4 text-white font-semibold rounded-md ${
              isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            } focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50`}
          >
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </form>
        <Link href="/login" className="font-medium text-blue-600 hover:text-blue-600">
            Log in
          </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
