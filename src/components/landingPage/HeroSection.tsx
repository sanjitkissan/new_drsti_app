import { aim, bit, manage, secure, wp11 } from "@/src/assets/landinPage";
import React from "react";
function HeroSection() {
  return (
    <section className="w-full main-container overflow-hidden flex flex-col items-center justify-center gap-16 my-24">
      <div className="w-full h-auto">
        <h1 className="text-4xl text-pink-500 font-extrabold text-center mb-4">
          Workplace Marketing
        </h1>
        <p className="text-3xl text-gray-600 text-center">
          This is the opportunity for your brand to influence the workplace!
        </p>
      </div>
      <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-8">
        <div className="w-full h-[60vh]">
          <img src={wp11.src} alt="img" className="w-full h-full" />
        </div>
        <div className="w-full flex flex-col items-start justify-between h-[60vh]  py-6">
          <span className="flex gap-6">
            {" "}
            <img src={bit.src} alt="img" className="h-10 w-12" />
            <p className="text-lg text-gray-600">
              Corporate professionals spend 10+ hours of their active day at
              workplaces
            </p>
          </span>
          <span className="flex gap-6">
            <img src={secure.src} alt="img" className="h-10 w-12" />
            <p className="text-lg text-gray-600">
              They are surrounded by like-minded professionals, with whom they
              interact, discuss, research and share their experiences
            </p>
          </span>
          <span className="flex gap-6">
            <img src={aim.src} alt="img" className="h-10 w-12" />
            <p className="text-lg text-gray-600">
              Audience which is actively seeking new engagements to break their
              monotonous routines
            </p>
          </span>
          <span className="flex gap-6">
            <img src={manage.src} alt="img" className="h-10 w-12" />
            <p className="text-lg text-gray-600">
              Create trend-setting campaigns that can be scaled and amplified
            </p>
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
