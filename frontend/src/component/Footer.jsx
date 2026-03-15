import React from "react";
import logo from "../assets/mainlogo.jpeg";

function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-gray-300 pt-16 pb-6">

      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="logo" className="w-10 h-10 rounded" />
            <h2 className="text-xl font-semibold text-white">One Cart</h2>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            We ensure secure payments, fast delivery, easy returns, data
            privacy protection, and reliable customer support for all
            shoppers.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>

          <ul className="space-y-2">
            <li className="hover:text-purple-400 cursor-pointer transition">Home</li>
            <li className="hover:text-purple-400 cursor-pointer transition">About</li>
            <li className="hover:text-purple-400 cursor-pointer transition">Delivery</li>
            <li className="hover:text-purple-400 cursor-pointer transition">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>

          <ul className="space-y-2 text-sm">
            <li>+91 98889 43253</li>
            <li>Patel Nagar Road</li>
            <li>contact@gmail.com</li>
            <li>admin@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-slate-700 mt-12 pt-5 text-center text-sm text-gray-400">
        © 2024 One Cart. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;