import React from "react";
import { MdLocationOn } from "react-icons/md";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    
    <footer className="w-[1920px] h-[449px] bg-white border-t border-gray-200 opacity-100 rotate-0 flex flex-col justify-between mx-auto">
      {/* Top Section */}
      <div className="absolute w-[1212px] h-[414px] top-[35px] left-[354px] bg-white grid grid-cols-3 gap-16 text-sm text-gray-700">
        {/* Left Column */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full border border-blue-500 bg-blue-400 flex items-center justify-center text-blue-600 font-bold text-lg">
              imb
            </div>
          </div>

          <p className="text-[13px] leading-relaxed text-gray-600">
            IMB Financial Services Pty Ltd, is an authorised Financial Services Provider (FSP43434),
            and an authorised co-branded partner of Pixepay Pty Ltd, Reg No. 2007/007606/07, an authorised
            distribution channel of Access Bank South Africa Limited, Reg. No.: 1947/025414/06 an authorised
            Financial Services Provider (FSP 5865).
          </p>

          <p className="mt-4 text-[13px] leading-relaxed text-gray-600">
            Our vision is to drive financial inclusion for all. Our mission is to open doors to new
            opportunities through the provision of disruptive and innovative financial products and solutions.
            We leverage technology to build convenience and simplicity.
          </p>
        </div>

        {/* Middle Column */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Products</h3>
          <ul className="space-y-5 text-[13px] text-gray-600">
            <li>IMB Personal Packages</li>
            <li>Remittance (coming soon)</li>
            <li>Affordable Distribution</li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Get in touch</h3>
          <ul className="space-y-1 text-[13px] text-gray-600">
          <li className="flex items-start gap-2">
      <MdLocationOn className="text-blue-600 text-lg mt-[2px]" />
      <span>
        2nd Floor, The Hills<br />
        Buchanan Square<br />
        160 Sir Lowry Rd, Woodstock<br />
        Cape Town<br />
        7925<br />
        South Africa
      </span>
    </li>
            <li className="mt-2">📞 078 993 4703</li>
            <li>📠 087 941 3252</li>
            <li>✉️ support@imb.co</li>
          </ul>

              <div className="mt-6  text-lg">
      {/* 🔹 Social Icons */}
      <div className="flex gap-8  justify-start mt-2">
        <a  href="#" aria-label="Facebook" >
          <SlSocialFacebook size={20} />
        </a>
        <a href="#" aria-label="Twitter" >
          <FaXTwitter size={20} />
        </a>
        <a href="#" aria-label="LinkedIn" >
          <SlSocialLinkedin size={20} />
        </a>
      </div>

      {/* 🔹 Cookie | Privacy | Terms */}
      <div className="flex gap-1 mt-2 text-sm text-gray-400">
        <a href="#" >Cookie</a>
        <span>|</span>
        <a href="#" >Privacy</a>
        <span>|</span>
        <a href="#" >Terms of Use</a>
      </div>
    </div>
        </div>
      </div>

    
    </footer>
  );
};

export default Footer;
