import { web2 } from "@/src/assets/newladingpage";



export default function AboutUsCard ({item}:any){
    return (
        <>
        <div className="w-flex flex lg:flex-row flex-col items-center justify-center">
          <div className="w-full h-[60vh]">
            <div className="w-full h-[60vh]">
              <img src={item.img.src} alt="img" className="w-full h-full" />
             
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start  gap-4">
            <h1 className="text-4xl text-black underline md:underline-offset-4 font-[Roboto]"> {item.subTitle} </h1>
            <p className="text-gray-600 text-lg font-[Roboto]">
            {item.descriptionOne}
            </p>
            <p className="text-gray-600 text-lg font-[Roboto]">{item.descriptionTwo}
            </p>
            <p className='text-2xl text-[#204991] font-[Roboto]'>Learn More.</p>
          </div>
        </div>
        </>
    )
}