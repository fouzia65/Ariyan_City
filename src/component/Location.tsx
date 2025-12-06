import React from "react";
import CoverflowSlider from "./coverflowSlider";

const LocationSection = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        ভিজিট বুক করুন
      </h2>

      {/* Promo Banner */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-orange-50 p-6 rounded-2xl mb-12 gap-4">
        <div>
          <div className="inline-block bg-[#2E7D32] text-white px-4 py-2 rounded-lg font-bold">
            Limited Plots
          </div>
          <div className="mt-2 font-semibold text-gray-800">
            Book now with zero down payment
          </div>
        </div>
        <a
          href="#contact"
          className="mt-4 md:mt-0 bg-[#2E7D32] hover:bg-[#2E7D32] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Book a Visit
        </a>
      </div>
      <CoverflowSlider></CoverflowSlider>

      {/* Map Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
        {/* MAP 1 */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-64 md:h-72"
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233610.27266411972!2d89.97483059453124!3d23.812890700000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755eba0d8bf2bc3%3A0xc32efd43212c51d3!2sAryan%20City!5e0!3m2!1sen!2sbd!4v1763358686695!5m2!1sen!2sbd"
            loading="lazy"
            title="Aryan City - Main Project Location"
          ></iframe>
          <div className="p-4 bg-white font-semibold text-center">
            Aryan City - Main Project Location
          </div>
        </div>

        {/* MAP 2 */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-64 md:h-72"
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.575984079533!2d90.40185597653101!3d23.762495333318036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8820b68650f%3A0x97fed943e315e244!2sRunner%20Group!5e0!3m2!1sen!2sbd!4v1763359466896!5m2!1sen!2sbd"
            loading="lazy"
            title="Corporate Office Location"
          ></iframe>
          <div className="p-4 bg-white font-semibold text-center">
            Corporate Office Location
          </div>
        </div>

        {/* MAP 3 */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-64 md:h-72"
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9779227983645!2d90.36520287456416!3d23.783800487494755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1973137789b%3A0xd61f4bdb65cc43b7!2sRunner%20Story%20House!5e0!3m2!1sen!2sbd!4v1763359498512!5m2!1sen!2sbd"
            loading="lazy"
            title="Sales Office Location"
          ></iframe>
          <div className="p-4 bg-white font-semibold text-center">
            Sales Office Location
          </div>
        </div>
        
      </div>
      

    </section>
  );
};

export default LocationSection;
