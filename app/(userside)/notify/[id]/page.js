"use client"

import React, { useState } from 'react';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: 'Your recent deposit of $500 was successful.',
      timestamp: '2024-09-25 10:00 AM',
      read: false,
    },
    {
      id: 2,
      message: 'Your account statement is ready for download.',
      timestamp: '2024-09-24 02:30 PM',
      read: true,
    },
    {
      id: 3,
      message: 'Transfer of $200 to JohnDoe was completed.',
      timestamp: '2024-09-23 04:15 PM',
      read: false,
    },
  ]);

  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <section className='w-full flex items-center'>
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Notifications</h2>
      {notifications.length === 0 ? (
        <p className="text-gray-500">No new notifications.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className={`p-4 border rounded-lg ${
                notification.read ? 'bg-gray-100' : 'bg-blue-50'
              }`}
            >
              <div className="flex justify-between items-center">
                <p className={`text-lg ${notification.read ? 'text-gray-600' : 'text-blue-600'}`}>
                  {notification.message}
                </p>
                {!notification.read && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="text-sm text-blue-500 hover:underline"
                  >
                    Mark as Read
                  </button>
                )}
              </div>
              <p className="text-sm text-gray-400 mt-2">{notification.timestamp}</p>
            </li>
          ))}
        </ul>
      )}
    </div></section>
  );
};

export default NotificationPage;
