

import React from "react";
import Title from "./Title";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { TbCircleCheckFilled } from "react-icons/tb";
import { MdContactSupport } from "react-icons/md";

function OurPolicy() {
  return (
    <div className="w-full py-20 bg-slate-100 flex flex-col items-center">

      {/* Title Section */}
      <div className="text-center mb-12 max-w-[700px]">
        <Title text1={"Our"} text2={"Policy"} />
        <p className="text-gray-600 mt-3 text-sm md:text-lg">
          We protect customer data, ensuring secure storage, confidentiality,
          and responsible usage at all times.
        </p>
      </div>

      {/* Policy Cards */}
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-[1200px]">

        {/* Card 1 */}
        <div className="bg-white w-[320px] p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center flex flex-col items-center">
          
          <MdOutlineCurrencyExchange className="text-purple-500 w-12 h-12 mb-4"/>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Easy Exchange Policy
          </h3>

          <p className="text-gray-500 text-sm">
            Customers may return unused products within the return window
            following the stated guidelines.
          </p>

        </div>

        {/* Card 2 */}
        <div className="bg-white w-[320px] p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center flex flex-col items-center">

          <TbCircleCheckFilled className="text-purple-500 w-12 h-12 mb-4"/>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Fast Shipping
          </h3>

          <p className="text-gray-500 text-sm">
            Orders are shipped promptly with tracking details shared once
            dispatch is completed successfully.
          </p>

        </div>

        {/* Card 3 */}
        <div className="bg-white w-[320px] p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center flex flex-col items-center">

          <MdContactSupport className="text-purple-500 w-12 h-12 mb-4"/>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            24/7 Customer Support
          </h3>

          <p className="text-gray-500 text-sm">
            Our support team is always ready to assist you with any queries
            regarding orders, payments, or returns.
          </p>

        </div>

      </div>
    </div>
  );
}

export default OurPolicy;