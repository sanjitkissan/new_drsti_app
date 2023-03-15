import { portfolioArr } from "@/src/utils/services";
import PortfolioCard from "../card/services/PortfolioCard";



export default function OurPortfolio(){
    return(
        <section className="w-full main-container flex flex-col items-center justify-center gap-6 my-24">
            <p className="tracking-wider">OUR PORTFOLIO</p>
            <h1 className="text-5xl font-extrabold">Show case of <span className="font-normal"> our work</span></h1>
            <p className="w-3/5 text-center">We have a deep understanding of user habits and behaviors. We are committed to using fact-based knowledge and our unique brand of innovation to help you dominate the competition.</p>
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6">
                {
                    portfolioArr.map((item:any)=>(
                        <div key={item.id}>
                            <PortfolioCard item={item}/>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}