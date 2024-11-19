import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-lg font-semibold text-yellow-300">News Aggregator</h2>
            <p className="text-sm text-gray-400 mt-2 max-w-xs">
              Your one-stop platform for the latest and most reliable news from around the world. Stay informed with updates on politics, technology, sports, and more.
            </p>
            <p className="text-sm text-gray-400 mt-2">© 2024 News Aggregator. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center w-full md:w-2/3 space-y-6 md:space-y-0 md:space-x-8">
            <div className="md:w-1/2">
              <h3 className="text-yellow-300 mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-sm hover:text-yellow-300">About Us</a></li>
                <li><a href="/contact" className="text-sm hover:text-yellow-300">Contact Us</a></li>
                <li><a href="/privacy" className="text-sm hover:text-yellow-300">Privacy Policy</a></li>
                <li><a href="/terms" className="text-sm hover:text-yellow-300">Terms of Service</a></li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-yellow-300 mb-2">Categories</h3>
              <ul className="space-y-2">
                <li><a href="/technology" className="text-sm hover:text-yellow-300">Technology</a></li>
                <li><a href="/sports" className="text-sm hover:text-yellow-300">Sports</a></li>
                <li><a href="/business" className="text-sm hover:text-yellow-300">Business</a></li>
                <li><a href="/entertainment" className="text-sm hover:text-yellow-300">Entertainment</a></li>
                <li><a href="/health" className="text-sm hover:text-yellow-300">Health</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6">
          <p className="text-xs text-gray-500 text-center">
            Made with ❤️ for news enthusiasts by the News Aggregator team. We strive to bring you comprehensive, unbiased news coverage.
          </p>
          <p className="text-xs text-gray-500 text-center mt-2">
            Follow us on <a href="https://twitter.com" className="hover:text-yellow-300">Twitter</a>, <a href="https://facebook.com" className="hover:text-yellow-300">Facebook</a>, and <a href="https://instagram.com" className="hover:text-yellow-300">Instagram</a> for updates.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
