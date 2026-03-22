import React from "react";
import logo from "../assets/mainlogo.jpeg";

function Footer() {
  return (
    <footer className="w-full bg-gray-100 lg:pt-16 pb-6">
      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo Section */}
        <div>
          <div className="flex items-center gap-3 mb-4 ">
            <img src={logo} alt="logo" className="w-10 h-10 rounded" />
            <h2 className="text-2xl font-bold">One Cart...</h2>
          </div>

          <p className=" font-semibold leading-relaxed">
            We ensure secure payments, <strong>fast delivery,</strong> <strong>easy</strong> returns, data
            privacy protection, and reliable customer support for all
            shoppers.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-bold lg:mb-4">Company</h3>

          <ul className=" lg:space-y-2 space-y-1 font-semibold">
            <li className="hover:text-purple-400 cursor-pointer transition">Home</li>
            <li className="hover:text-purple-400 cursor-pointer transition">About</li>
            <li className="hover:text-purple-400 cursor-pointer transition">Delivery</li>
            <li className="hover:text-purple-400 cursor-pointer transition">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold lg:mb-4">Get In Touch</h3>

          <ul className="space-y-2">
            <li>+91 9888943253</li>
            <li>Patel Nagar Road</li>
            <li>contact@gmail.com</li>
            <li>admin@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-slate-700 mt-12 lg:pt-5 text-center text-sm">
        © 2024 One Cart. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;