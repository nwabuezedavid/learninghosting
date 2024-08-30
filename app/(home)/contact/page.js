"use client";
import { UseSitedetail } from "@/app/(component)/context/sitedetail";
import React from "react";

const ContactUs = () => {
    const { datax } = UseSitedetail()
  return (
    <div className="px-8 md:max-w-[75rem] md:mx-auto md:p-4 font-inter my-12">
      <h1 className="font-semibold text-2xl mb-8 text-center">Contact Us</h1>
      <div className="space-y-8">
        <div className="mb-8">
          <h2 className="font-semibold text-xl mb-4">Get in Touch</h2>
          <p className="text-sm font-normal">
            If you have any questions, concerns, or feedback, please feel free to contact us using the form below or through our email and phone numbers. We look forward to hearing from you!
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium text-sm mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 p-3 w-full rounded-md text-sm"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                className="block font-medium text-sm mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 p-3 w-full rounded-md text-sm"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          <div>
            <label
              className="block font-medium text-sm mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="border border-gray-300 p-3 w-full rounded-md text-sm"
              placeholder="Subject"
              required
            />
          </div>

          <div>
            <label
              className="block font-medium text-sm mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              className="border border-gray-300 p-3 w-full rounded-md text-sm h-32"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Send Message
          </button>
        </form>

        <div className="space-y-4">
          <h2 className="font-semibold text-xl mb-4">Contact Information</h2>
          <p className="text-sm font-normal">
            Email: <a href="mailto:help@{datax}.com">help@{datax}.com</a>
          </p>
          <p className="text-sm font-normal">Phone: +123 456 7890</p>
          <p className="text-sm font-normal">Address: 123 Your Street, City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
