import React from "react";
import Title from "../component/Title";
import Contact1 from "../assets/Contact1.jpeg";
import NewLetterBox from "../component/NewLetterBox";

function Contact() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-slate-100 py-16">

      {/* Title */}
      <Title text1={"CONTACT"} text2={"US"} />

      {/* Contact Section */}
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center gap-12 px-6 mt-10">

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={Contact1}
            alt="contact"
            className="w-[85%] rounded-xl shadow-lg hover:-translate-y-1 transition duration-300"
          />
        </div>

        {/* Contact Details */}
        <div className="lg:w-1/2 flex flex-col gap-5 text-gray-700">

          <h3 className="text-xl font-bold text-purple-600">
            Our Store
          </h3>

          <p>
            12345 Random City Station
          </p>

          <p>
            Email: admin@onecart.com
          </p>

          <h3 className="text-xl font-bold text-purple-600 mt-4">
            Shopping Hours at One Cart
          </h3>

          <p>
            Learn more about our store hours and explore job openings.
          </p>

          <button className="w-fit px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition shadow-md">
            Explore Jobs
          </button>

        </div>
      </div>

      {/* Newsletter */}
      <div className="w-full mt-16">
        <NewLetterBox />
      </div>

    </div>
  );
}

export default Contact;