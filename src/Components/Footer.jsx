import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white py-10 px-4 h-full w-full">
      {/* Main Grid */}
      <div className=" flex flex-col justify-around sm:flex-row sm:flex-wrap animate-fade-in">
        {/* Branding */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-wide">Speed News</h2>
          <p className="text-sm text-gray-400">All rights reserved © {new Date().getFullYear()}</p>
          <p className="text-sm text-gray-300">Your go-to news aggregator</p>
          <p className="text-sm text-gray-300">for the latest headlines</p>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <h3 className="mt-3 sm:text-lg font-semibold text-gray-200">Contact</h3>
          <p className="text-sm text-gray-400">Support@speednews.com</p>
          <p className="text-sm text-gray-400">Feedback</p>
        </div>

        {/* Follow Us */}
        <div className="space-y-2">
          <h3 className=" mt-3 sm:text-lg font-semibold text-gray-200">Follow Us</h3>
          <div className="flex m-auto sm:justify-start gap-4 mt-2">
            <a href="#" className="hover:scale-110 transition-transform duration-300 text-blue-500">
              <FacebookOutlinedIcon style={{ fontSize: 30 }} />
            </a>
            <a href="#" className="hover:scale-110 transition-transform duration-300 text-pink-500">
              <InstagramIcon style={{ fontSize: 30 }} />
            </a>
            <a href="#" className="hover:scale-110 transition-transform duration-300 text-gray-400">
              <XIcon style={{ fontSize: 30 }} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-2 flex flex-col">
          <h3 className="mt-3 sm:text-lg font-semibold text-gray-200">Quick Links</h3>
          <a href="#" className="text-sm text-gray-400 hover:underline hover:text-white transition">Home</a>
          <a href="#" className="text-sm text-gray-400 hover:underline hover:text-white transition">About</a>
          <a href="#" className="text-sm text-gray-400 hover:underline hover:text-white transition">Latest News</a>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-700 my-8 w-[90%] mx-auto" />

      {/* Bottom Info */}
      <div className="text-center text-sm text-gray-500 space-x-4">
        <span className="hover:text-white hover:underline cursor-pointer">Privacy Policy</span>
        <span>|</span>
        <span className="hover:text-white hover:underline cursor-pointer">Terms of Use</span>
        <span>|</span>
        <span className="hover:text-white hover:underline cursor-pointer">Cookies</span>
      </div>
    </footer>
  );
};

export default Footer;
