import { WorkImg1, WorkImg2, WorkImg3 } from "@/src/assets/services";


export default function WorkForResult(){
    return(
        <section className="w-full main-container flex flex-col lg:flex-row items-center justify-center my-24 gap-6 ">
            <div className="w-full relative h-[60vh]">
                <img src={WorkImg1.src} alt="" className="absolute top-0 right-0 w-72 h-72" />
                <img src={WorkImg2.src} alt=""  className="absolute left-0 top-10  z-30 w-72 h-72"/>
                <img src={WorkImg3.src} alt="" className="absolute left-28 bottom-0 z-50 w-72 h-72"/>
            </div>
            <div className="w-full flex flex-col items-start p-4 justify-center gap-4">
                <p className="text-xl tracking-wider">GOOD JOB, EXCELLENT RATING</p>
                <h1 className="text-5xl font-bold tracking-wider">Work for <span className="font-normal"> the result</span></h1>
                <p className="text-lg font-bold">Overcome difficulties. We believe in each other and do the impossible! Everything for the result and your progress. Our team has promising methods for promoting business on the Internet.</p>
                <span className="w-full flex items-center justify-start gap-8">
                    <span className="p-4 rounded-full border-4 border-sky-700">
                        <h1 className="text-2xl font-bold">84%</h1>
                    </span>
                    <span>
                        <h1 className="text-2xl ">Successful Projects</h1>
                        <p>Our customer base is always growing, because the result of our work brings money</p>
                    </span>
                </span>
                <span className="w-full flex items-center justify-start gap-8">
                    <span className="p-4 rounded-full border-4 border-sky-700">
                        <h1 className="text-2xl font-bold">75%</h1>
                    </span>
                    <span>
                        <h1 className="text-2xl ">Click-Through Rate</h1>
                        <p>Our customer base is always growing, because the result of our work brings money</p>
                    </span>
                </span>
                <span className="w-full flex items-center justify-start gap-8">
                    <span className="p-4 rounded-full border-4 border-sky-700">
                        <h1 className="text-2xl font-bold">98%</h1>
                    </span>
                    <span>
                        <h1 className="text-2xl ">Returning Customers</h1>
                        <p>Our customer base is always growing, because the result of our work brings money</p>
                    </span>
                </span>
            </div>
        </section>
    )
}