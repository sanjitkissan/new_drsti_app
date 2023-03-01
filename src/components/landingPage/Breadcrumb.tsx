import React from "react";
import { breadCeumbArr } from "@/src/utils/landingpage";
import Slider from "react-slick";
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
};

function Breadcrumb() {
  return (
    <section className="w-full h-[80vh] overflow-hidden ">
      <Slider {...settings}>
        {breadCeumbArr.map((item) => (
          <>
          <section
            className="w-full h-[80vh] bg-no-repeat bg-cover bg-center relative py-4"
            style={{ backgroundImage: `url(${item?.img.src})` }}
            key={item.id}
          >
            <div className="w-full main-container flex flex-col items-start justify-center  gap-6">
              <h1 className="text-white text-7xl font-extrabold w-1/4 logoWarper_two capitalize">
               {item?.title}
              </h1>
              <p className="gradient-text_4 font-extrabold text-xl lg:w-1/2 w-full logoWarper_two">
                {item?.content}
              </p>
              <span className=" flex items-center justify-start gap-4 w-full">
                <button className="text-white rounded-full border-2 font-bold logoWarper_two border-red-600 hover:bg-gradient-to-r from-red-600 to-blue-600 px-6 py-2 transition-all duration-300 ease-out">
                  Property Partner
                </button>
                <button className="text-white rounded-full border-2 font-bold logoWarper_two border-red-600 hover:bg-gradient-to-r from-red-600 to-blue-600 px-6 py-2 transition-all duration-300 ease-out">
                  Brand Partner
                </button>
              </span>
            </div>
            <div className="absolute bottom-48 right-16 bg-white h-96 w-60 p-4 hidden lg:block">
              <video className="w-full h-full" controls>
                <source src={"https://youtu.be/ANzPM5-lwXc"} type="video/mp4" />
              </video>
            </div>
          </section>
          </>
        ))}
      </Slider>
    </section>
  );
}

export default Breadcrumb;
