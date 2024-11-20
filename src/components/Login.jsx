import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/auth/login', credentials)
    console.log('Login form submitted:', credentials);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white dark:bg-gray-900 shadow-lg rounded-lg"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-6">Login</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
