import { BreadcrumbImg } from "@/src/assets/services";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function Breadcrumb(){
    return(
        <section style={{backgroundImage:`url(${BreadcrumbImg.src})`}} className="w-full bg-center bg-cover bg-no-repeat h-[80vh]">
                <div className="w-full h-full main-container flex flex-col lg:flex-row items-center justify-center">
                    <div className="w-full h-full flex flex-col items-start justify-center gap-6">
                        <span className="w-full flex items-center justify-start gap-4">
                            <span className="p-4 rounded-full border border-gray-800 hover:bg-sky-700">
                                <PlayArrowIcon className="!text-white"/>
                            </span>
                        </span>
                        <p className="text-white text-2xl uppercase tracking-wider">innovative solutions</p>
                        <span>
                        <h1 className="text-7xl text-white tracking-wide">the new level  </h1>
                        <h1 className="font-bold text-7xl text-white tracking-wide"> in advertising</h1>
                        </span>
                        <button className="px-10 py-4 border border-gray-300 text-white font-bold uppercase hover:bg-sky-700">more info</button>
                    </div>
                    <div className="w-full"></div>
                </div>
        </section>
    )
}