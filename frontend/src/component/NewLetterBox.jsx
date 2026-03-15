// 

import React from "react";

function NewLetterBox() {

  const handleSubmit = (e) => {
    e.preventDefault();
    // form logic
  };

  return (
    <div className="w-full bg-slate-100 py-20 flex flex-col items-center text-center px-5">

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 max-w-[700px]">
        Subscribe to our newsletter & get 
        <span className="text-purple-600"> 30% off</span> on your first purchase
      </h2>

      {/* Subtext */}
      <p className="text-gray-600 mt-4 max-w-[600px] text-sm md:text-lg">
        Get the latest updates, exclusive offers, special deals and early
        access to our newest collections.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col sm:flex-row gap-4 w-full max-w-[600px]"
      >

        {/* Input */}
        <input
          type="text"
          placeholder="Enter your email"
          required
          className="
          flex-1
          px-5
          py-3
          rounded-lg
          border
          border-gray-300
          focus:outline-none
          focus:ring-2
          focus:ring-purple-400
          text-gray-700
          "
        />

        {/* Button */}
        <button
          type="submit"
          className="
          px-6
          py-3
          bg-purple-600
          text-white
          font-semibold
          rounded-lg
          hover:bg-purple-700
          transition
          duration-300
          shadow-md
          "
        >
          Subscribe
        </button>

      </form>

    </div>
  );
}

export default NewLetterBox;