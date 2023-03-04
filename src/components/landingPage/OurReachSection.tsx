import { capture, icon1, icon2, icon3, icon4 } from "@/src/assets/landinPage";
import React from "react";

function OurReachSection() {
  return (
    <section className="w-full main-container overflow-hidden flex flex-col items-center justify-center gap-6 my-24 ">
      <div>
        <h1 className="text-4xl text-pink-500 font-extrabold text-center mb-4">
          Our Reach
        </h1>
      </div>
      <div className="w-flex flex lg:flex-row flex-col items-center justify-center gap-6">
        <div className="w-full h-[60vh]">
          <div className="w-full h-[60vh]">
            <img src={capture.src} alt="img" className="w-full h-full" />
           
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-start  gap-10">
          <h1 className="text-4xl text-gray-700 ">
            45,00,000+ <br />
            Corporate Professionals
          </h1>
          <p className="text-gray-600 text-lg">
            {" "}
            Working in leading MNCs like IBM, Facebook, TCS, Cognizant Google,
            Amazon, Linkedin, Delloite, Wells Fargo, Target, Accenture, and more
          </p>
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <span className="flex items-center justify-start gap-3">
              <img src={icon1.src} alt="img" className="h-20 w-20" />
              <p className="text-sm text-gray-600">8 Metro Cities</p>
            </span>

            <span className="flex items-center justify-start gap-3">
              <img src={icon3.src} alt="img" className="h-20 w-20" />
              <p className="text-sm text-gray-600">75+ Corporate Parks</p>
            </span>
            <span className="flex items-center justify-start gap-3">
              <img src={icon2.src} alt="img" className="h-20 w-20" />
              <p className="text-sm text-gray-600">1500+ Media Touch Points</p>
            </span>
            <span className="flex items-center justify-start gap-3">
              <img src={icon4.src} alt="img" className="h-20 w-20" />
              <p className="text-sm text-gray-600">
                Digital OOH network in over 300+ Corporate offices
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurReachSection;
