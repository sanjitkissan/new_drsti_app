import React,{useState,useEffect, Fragment} from "react";

import { cardArrHome } from "@/src/types";
import Slider from "react-slick";
type prop = {
  item: cardArrHome;
};

function HomeCard({ item }: prop) {
    const [isActiveIndex, setIsActiveIndex] =  useState<number>(0)

    useEffect(() =>{
        const interval = setInterval(() =>{
            if (isActiveIndex >= item.img.length-1){
                setIsActiveIndex(0)
            }else{
                setIsActiveIndex(isActiveIndex+1)
            }
        },500)
        return ()=>{
            clearInterval(interval)
        }
    },[isActiveIndex])


  return (
      
    <section
      className={`w-full h-96 p-2 overflow-hidden bg-white border border-black ${
        item.id == 2 && "mt-48"
      } $ ${item.id == 4 && "mt-48"} ${item.id == 1 && "-mt-48"} ${
        item.id == 5 && "-mt-48"
      }`}
    >
        <>
       {
        item.img.map((items)=>(
            // <div >
            

              <img
                src={items.img1.src}
                alt="img"
                className={`w-full h-full object-cover ${isActiveIndex===item.id && "!z-[999]"}`}
                key={items.id}
              />
           
              
            // </div>
        ))
       }
        </>
            
    </section>
     
  );
}

export default HomeCard;
