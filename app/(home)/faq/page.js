"use client"
import { UseSitedetail } from '@/app/(component)/context/sitedetail';
import React from 'react';

const FAQ = () => {
    const { datax } = UseSitedetail()
  return (
    <div className="px-8 md:max-w-[75rem] md:mx-auto md:p-4 font-inter my-12">
      <h1 className="font-semibold text-2xl mb-8 text-center">Frequently Asked Questions (FAQ)</h1>
      <div className="space-y-8">
        <div>
          <h2 className="font-semibold text-xl mb-4">1. What is {datax}?</h2>
          <p className="text-sm font-normal">
            {datax} is a comprehensive platform providing various services and solutions. For residents of Lithuania, European Union, and supported countries, {datax} TR Holdings UAB oversees operations. For residents of India, services are managed by RPFAS Technologies Private Limited.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-4">2. How is my personal information protected?</h2>
          <p className="text-sm font-normal">
            {datax} is committed to protecting your personal information. We implement various security measures to protect your data from unauthorized access, use, or disclosure. For more details, please refer to our Privacy Policy.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-4">3. How can I withdraw my consent for data processing?</h2>
          <p className="text-sm font-normal">
            If you wish to withdraw your consent for data processing, please send a written request to help@{datax}.com. Once we receive your request, we will stop processing your data, subject to applicable legal requirements.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-4">4. What types of personal information do you collect?</h2>
          <p className="text-sm font-normal">
            We collect various types of personal information, including identification details, national identifiers, correspondence details, financial data, and location data. For a complete list, please see our Privacy Policy.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-4">5. How can I correct or update my personal information?</h2>
          <p className="text-sm font-normal">
            You can correct or update your personal information online. If you have lost your access details, you can retrieve them or receive new access details by emailing help@{datax}.com.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-4">6. What is the data retention period?</h2>
          <p className="text-sm font-normal">
            We retain personal information for as long as necessary to fulfill the purposes outlined in our Privacy Policy or as required by applicable law. Typically, personal information is retained for up to 10 years from the date of fulfillment of the respective agreement.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-4">7. What are cookies, and how do you use them?</h2>
          <p className="text-sm font-normal">
            Cookies are small files stored on your device that contain information such as user preferences and browsing activities. We use cookies to enhance your experience on our online platforms and analyze website traffic. You can manage cookie preferences through your browser settings.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-4">8. How do you handle data security?</h2>
          <p className="text-sm font-normal">
            We take data security seriously and implement various measures to protect your personal information from unauthorized access, use, or disclosure. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-4">9. How can I contact {datax} for more information?</h2>
          <p className="text-sm font-normal">
            If you have any questions or need further information, please feel free to contact us at help@{datax}.com. We will be happy to assist you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
