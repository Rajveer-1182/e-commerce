import React from "react";
import Title from "../component/Title";
import about from "../assets/About.webp";
import NewLetterBox from "../component/NewLetterBox";

function About() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-slate-100 py-10">

      {/* TITLE */}
      <Title text1={"About"} text2={"Us"} />

      {/* ABOUT SECTION */}
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center gap-10 px-6 mt-10">

        {/* IMAGE */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={about}
            alt="about"
            className="w-[90%] rounded-lg shadow-lg hover:-translate-y-2 transition duration-300"
          />
        </div>

        {/* TEXT */}
        <div className="lg:w-1/2 flex flex-col gap-5 text-gray-700">

          <p>
            Welcome to our e-commerce platform, where we offer a wide range of
            products at competitive prices. Our mission is to provide an
            exceptional shopping experience for all our customers.
          </p>

          <p>
            A modern shop offers seamless shopping with stylish design, easy
            navigation, secure payments, fast delivery, and reliable customer
            support. We focus on quality products and smooth checkout across
            all devices.
          </p>

          <h3 className="text-lg font-bold text-purple-600 mt-3">
            OUR MISSION
          </h3>

          <p>
            Our mission is to deliver high-quality products through a reliable
            and customer-focused shopping experience. We build trust through
            secure payments, fast delivery, and responsive customer support.
          </p>

        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="w-full max-w-[1200px] mt-16 px-6">

        <Title text1={"WHY"} text2={"CHOOSE US"} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

          {/* CARD 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-purple-600 mb-3">
              Quality Assurance
            </h3>
            <p className="text-gray-600">
              We ensure strict quality checks, reliable sourcing, and careful
              packaging to deliver trusted, high-standard products every time.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-purple-600 mb-3">
              Convenience
            </h3>
            <p className="text-gray-600">
              Our platform provides easy navigation, quick search, secure
              checkout, flexible payment options, fast delivery and
              hassle-free returns.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-purple-600 mb-3">
              Exceptional Customer Service
            </h3>
            <p className="text-gray-600">
              Our dedicated support team provides quick responses, helpful
              solutions and a friendly experience to build long-term trust
              with customers.
            </p>
          </div>

        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="w-full mt-16">
        <NewLetterBox />
      </div>

    </div>
  );
}

export default About;