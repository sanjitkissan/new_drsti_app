import { Main_Logo } from "@/src/assets/navbar";


export default function Header(){
    return(
        <section className=" bg-gradient-to-r from-red-600 to-blue-600 border-b">
        <section className="w-full main-container h-20 flex items-center justify-between">
            <div className="w-28 h-14">
                <img src={Main_Logo.src} alt="" className="w-full h-full"/>
            </div>
            <div className="w-full flex items-center justify-end">
                <button className="px-6 py-2 rounded-full bg-white ">check</button>
            </div>
        </section>
        </section>
    )
}