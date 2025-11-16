import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto flex justify-between px-8">
        {/* Left Section */}
        <div className="max-w-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-full border border-blue-500 flex items-center justify-center text-blue-500 font-bold text-lg">
              imb
            </div>
          </div>
          <p>
            IMB Financial Services Pty Ltd is an authorised Financial Services Provider (FSP43434)
            and an authorised co-branded partner of Pixepay Pty Ltd. Reg No. 2007/007606/07.
          </p>
          <p className="mt-3 text-gray-500">
            Our vision is to drive financial inclusion for all through disruptive and innovative solutions.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Products</h3>
          <ul>
            <li>IMB Personal Packages</li>
            <li>Remittance (coming soon)</li>
            <li>Affordable Distribution</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Get in touch</h3>
          <p>2nd Floor, The Hills, Buchanan Square</p>
          <p>160 Sir Lowry Rd, Woodstock, Cape Town</p>
          <p>South Africa</p>
          <p className="mt-2">078 993 4703</p>
          <p>support@imb.co</p>

          <div className="flex gap-3 mt-3">
            <a href="#" className="hover:text-blue-500">📘</a>
            <a href="#" className="hover:text-blue-500">💼</a>
            <a href="#" className="hover:text-blue-500">✉️</a>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 text-gray-400 text-xs">
        cookie | privacy | terms of use
      </div>
    </footer>
  );
};

export default Footer;
