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
          <div key={item.id}>
          <section
            className="w-full h-[80vh] bg-no-repeat bg-cover bg-center  py-4"
            style={{ backgroundImage: `url(${item?.img.src})` }}
            
          >
            <div className="w-full main-container flex flex-col items-start justify-center  gap-6">
              <h1 className="text-white text-7xl font-extrabold w-1/4 logoWarper_two capitalize">
               {item?.title}
              </h1>
              <p className="gradient-text_4 font-extrabold text-xl lg:w-1/2 w-full logoWarper_two">
                {item?.content}
              </p>
              
            </div>
           
          </section>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Breadcrumb;
